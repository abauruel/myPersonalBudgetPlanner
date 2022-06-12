import { IExpensesRepository } from "@modules/expenditure/repositories/IExpensesRepository";
import { inject, injectable } from "tsyringe";
import { v4 as uuidv4 } from 'uuid'

type CreateExpenseType = {

  name: string,
  idgroup: string,
  idpaymentType: number,
  idsubcategory: number,
  date: Date,
  amount: number
}

@injectable()
class CreateExpenseUseCase {
  constructor(
    @inject('ExpensesRepository')
    private expensesRepository: IExpensesRepository
  ) {
  }
  async execute({ name, idgroup, idpaymentType, idsubcategory, date, amount }: CreateExpenseType) {
    await this.expensesRepository.createExpense({ id: uuidv4(), name, idgroup, idpaymentType, idsubcategory, date, amount })
  }
}


export { CreateExpenseUseCase }