import { IExpensesRepository } from "@modules/expenditure/repositories/IExpensesRepository";
import { inject, injectable } from "tsyringe";
import { startOfMonth, endOfMonth } from 'date-fns'
import { Expenses } from "@modules/expenditure/infra/typeorm/entities/Expenses";

type expensesInputProps = {
  date: Date,
  idsubcategory: number
}

@injectable()
class ListExpensesUseCase {
  constructor(
    @inject('ExpensesRepository')
    private ExpensesRepository: IExpensesRepository
  ) { }
  async execute({ date, idsubcategory }: expensesInputProps): Promise<Expenses[]> {

    const expenses = await this.ExpensesRepository.findExpensesByMonth(date, idsubcategory)
    return expenses
  }
}

export { ListExpensesUseCase }