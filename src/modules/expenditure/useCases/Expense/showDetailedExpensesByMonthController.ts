import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateExpenseUseCase } from "./createExpenseUseCase";
import { ListExpensesUseCase } from "./listExpensesUseCase";
import { ShowDetailedExpensesByMonth } from "./showDetailedExpensesbyMonthUseCase";
import { isDate } from "date-fns";

class ShowDetailedExpensesByMonthController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { date } = request.query;
    const dateConverted = new Date(date.toString());
    const showDetailedExpensesByMonth = container.resolve(
      ShowDetailedExpensesByMonth
    );
    const expenses = await showDetailedExpensesByMonth.execute(dateConverted);
    return response.json(expenses);
  }
}

export { ShowDetailedExpensesByMonthController };
