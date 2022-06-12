import { CreateExpenseController } from "@modules/expenditure/useCases/Expense/createExpenseController";
import { ListExpensesController } from "@modules/expenditure/useCases/Expense/listExpensesController";
import { ShowDetailedExpensesByMonthController } from "@modules/expenditure/useCases/Expense/showDetailedExpensesbyMonthController";
import { Router } from "express";

const expenseRoutes = Router();
const createExpensesController = new CreateExpenseController();
const listExpensesController = new ListExpensesController();
const showDetailedExpensesByMonthController =
  new ShowDetailedExpensesByMonthController();

expenseRoutes.get("/", listExpensesController.handle);
expenseRoutes.post("/", createExpensesController.handle);
expenseRoutes.get("/byMonth", showDetailedExpensesByMonthController.handle);

export { expenseRoutes };
