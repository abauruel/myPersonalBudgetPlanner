import {
  CreateExpenseType,
  IExpensesRepository,
} from "@modules/expenditure/repositories/IExpensesRepository";
import { getMonth, getYear, endOfMonth, setDate, startOfMonth } from "date-fns";
import {
  Between,
  getRepository,
  LessThanOrEqual,
  MoreThanOrEqual,
  Repository,
} from "typeorm";
import { Expenses } from "../entities/Expenses";

class ExpensesRepository implements IExpensesRepository {
  private expensesRepository: Repository<Expenses>;
  constructor() {
    this.expensesRepository = getRepository(Expenses);
  }

  async findById(idExpense: number): Promise<Expenses> {
    const expense = await this.expensesRepository.findOne({
      where: {
        id: idExpense.toString(),
      },
    });
    return expense;
  }

  async createExpense(expense: CreateExpenseType): Promise<void> {
    const newExpense = this.expensesRepository.create(expense);
    await this.expensesRepository.save(newExpense);
  }

  async findExpensesByMonth(
    month: Date,
    subcategory: number
  ): Promise<Expenses[]> {
    const lastDay = endOfMonth(month);
    const firstDay = startOfMonth(month);
    const expenses = await this.expensesRepository.find({
      where: {
        date: Between(firstDay, lastDay),
        idsubcategory: subcategory,
      },
    });
    console.log(expenses);
    return expenses;
  }

  async findExpenseBySubcategory(idSubcategory: number): Promise<Expenses[]> {
    const expenses = await this.expensesRepository.find({
      where: {
        idsubcategory: idSubcategory,
      },
    });
    return expenses;
  }
}

export { ExpensesRepository };
