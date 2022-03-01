import dotenv from 'dotenv'
dotenv.config()
import path from 'path'
import multer from 'multer'
import crypto from 'crypto'
import multerS3 from 'multer-s3'
import aws from 'aws-sdk'

type MulterFileProps = Express.Multer.File & {
  key: string
}

const multerConfig = () => {
  const MAX_SIZE_TWO_MEGABYTES = 2 * 1024 * 1024;
  const storageTypes = {
    local: multer.diskStorage({
      destination: (req, file: MulterFileProps, cb) => {
        cb(null, path.resolve(__dirname, "..", "..", "tmp", "uploads"));
      },
      filename: (req, file: MulterFileProps, cb) => {
        crypto.randomBytes(16, (err: Error, hash) => {
          if (err) cb(err, file.filename)
          file.key = `${hash.toString("hex")}-${file.originalname}`;
          cb(null, file.key);
        });
      }
    }),

    s3: multerS3({
      s3: new aws.S3({
        credentials: {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_ID
        }
      }),
      bucket: process.env.BUCKET_NAME || 'teste',
      key: (req, file, cb) => {
        crypto.randomBytes(16, (err, hash) => {
          if (err) cb(err);
          const fileName = `${hash.toString("hex")}-${file.originalname}`;
          cb(null, fileName);
        });
      },
    }),

  }

  const config = {
    dest: path.resolve(__dirname, "..", "..", "tmp", "uploads"),
    storage: storageTypes[process.env.STORAGE_TYPE],
    limits: {
      fileSize: MAX_SIZE_TWO_MEGABYTES,
    },
    fileFilter: (req, file, cb) => {
      const allowedMimes = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/gif",
      ];

      if (allowedMimes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new Error("Invalid file type."));
      }
    },
  }

  return config
}
export { multerConfig }