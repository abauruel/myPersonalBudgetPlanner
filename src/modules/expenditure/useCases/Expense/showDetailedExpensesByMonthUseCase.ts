import { endOfMonth, startOfMonth } from "date-fns";
import { Between, getRepository, Repository, DataSource } from "typeorm";
import { Category } from "../../infra/typeorm/entities/Category";

export class ShowDetailedExpensesByMonth {
  private readonly categoryRepository: Repository<Category>;
  constructor() {
    this.categoryRepository = getRepository(Category);
  }

  async execute(month: Date): Promise<Category[]> {
    const lastDay = endOfMonth(month);
    const firstDay = startOfMonth(month);

    const expenses = await this.categoryRepository.find({
      // select: { subcategory: { name: true } },
      relations: {
        subcategories: {
          expenses: true,
        },
      },
      where: {
        subcategories: {
          expenses: {
            date: Between(firstDay, lastDay),
          },
        },
      },
    });

    console.log("expenses=>", expenses);
    return expenses;
  }
}
