import { Expenses } from "../infra/typeorm/entities/Expenses";

type CreateExpenseType = {
  id?: string;
  name: string;
  date: Date;
  idgroup: string;
  idpaymentType: number;
  idsubcategory: number;
  amount: number;
};

interface IExpensesRepository {
  findById(idExpense: number): Promise<Expenses>;
  createExpense(expense: CreateExpenseType): Promise<void>;
  findExpensesByMonth(month: Date, subcategory: number): Promise<Expenses[]>;
  findExpenseBySubcategory(idSubcategory: number): Promise<Expenses[]>;
}

export { IExpensesRepository, CreateExpenseType };
