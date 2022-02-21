import { app } from './app'
import { GraphQlServer } from './graphQlServer'
const port = process.env.PORT || 3333

GraphQlServer()

app.listen(port, () => console.info(`server running on ${port} port`))