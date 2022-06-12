import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateExpenseUseCase } from "./createExpenseUseCase";
import { ListExpensesUseCase } from "./listExpensesUseCase";
import { isDate } from 'date-fns'

class ListExpensesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { idsubcategory, date } = request.query

    const dateConverted = new Date(date.toString())
    const idSubcategoryParsed = parseInt(idsubcategory.toString())
    const listExpensesUseCase = container.resolve(ListExpensesUseCase)
    const expenses = await listExpensesUseCase.execute({ date: dateConverted, idsubcategory: idSubcategoryParsed })
    return response.json(expenses)
  }
}

export { ListExpensesController }