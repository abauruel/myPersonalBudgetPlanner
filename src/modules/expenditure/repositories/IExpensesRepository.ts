import { Expenses } from "../infra/typeorm/entities/Expenses";

type CreateExpenseType = {
  name: string,
  date: Date,
  idgroup: number,
  idpaymentType: number,
  idsubcategory: number
}


interface IExpensesRepository {
  findById(idExpense: number): Promise<Expenses>
  createExpense(expense: CreateExpenseType): Promise<void>
  findExpensesByMonth(month: Date): Promise<Expenses[]>
  findExpenseBySubcategory(idSubcategory: number): Promise<Expenses[]>
}

export { IExpensesRepository, CreateExpenseType }