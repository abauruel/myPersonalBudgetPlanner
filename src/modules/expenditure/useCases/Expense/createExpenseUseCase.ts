import { IExpensesRepository } from "@modules/expenditure/repositories/IExpensesRepository";
import { inject, injectable } from "tsyringe";

type CreateExpenseType = {
  name: string,
  idgroup: number,
  idpaymentType: number,
  idsubcategory: number,
  date: Date
}

@injectable()
class CreateExpenseUseCase {
  constructor(
    @inject('ExpensesRepository')
    private expensesRepository: IExpensesRepository
  ) {
  }
  async execute({ name, idgroup, idpaymentType, idsubcategory, date }: CreateExpenseType) {
    await this.expensesRepository.createExpense({ name, idgroup, idpaymentType, idsubcategory, date })
  }
}


export { CreateExpenseUseCase }