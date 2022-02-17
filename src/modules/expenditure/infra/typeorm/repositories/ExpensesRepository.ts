import { CreateExpenseType, IExpensesRepository } from "@modules/expenditure/repositories/IExpensesRepository";
import { getMonth, getYear, lastDayOfMonth, setDate } from "date-fns";
import { Between, LessThanOrEqual, MoreThanOrEqual, Repository } from "typeorm";
import { Expenses } from "../entities/Expenses";

class ExpensesRepository implements IExpensesRepository {
  private expensesRepository: Repository<Expenses>

  async findById(idExpense: number): Promise<Expenses> {
    const expense = await this.expensesRepository.findOne({
      where: {
        id: idExpense
      }
    })
    return expense
  }


  async createExpense(expense: CreateExpenseType): Promise<void> {
    const newExpense = this.expensesRepository.create(expense)
    await this.expensesRepository.save(newExpense)
  }


  async findExpensesByMonth(month: Date): Promise<Expenses[]> {
    const monthNumber = getMonth(month)
    const yearNumber = getYear(month)
    const lastDay = lastDayOfMonth(month)
    const firstDay = setDate(new Date(yearNumber, monthNumber, 1), 1)

    return await this.expensesRepository.find({
      date: Between(firstDay, lastDay)
    })
  }

  async findExpenseBySubcategory(idSubcategory: number): Promise<Expenses[]> {
    const expenses = await this.expensesRepository.find({
      where: {
        idsubcategory: idSubcategory
      }
    })
    return expenses
  }


}


export { ExpensesRepository }