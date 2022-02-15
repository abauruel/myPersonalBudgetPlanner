import { CreateCategoryUseCase } from "./CreateCategoryUseCase"
import { CategoriesRepositoryInMemory } from "../repositories/in-memory/CategoriesRepositoryInMemory"

describe("Category", () => {

  it("should be able to create a category", async () => {
    const categoryRepository = new CategoriesRepositoryInMemory()
    const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository)

    const name = "pessoal"
    await createCategoryUseCase.execute(name)
    const categoryCreated = (await categoryRepository.findAll()).find(c => c.name == name)
    expect(categoryCreated).toHaveProperty('name', name)
  })

  it("should be able to list all categories", async () => {
    const categoryRepository = new CategoriesRepositoryInMemory()
    const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository)

    const categoryArr = ["habitação", "dividas", "saúde"]
    categoryArr.forEach(c => createCategoryUseCase.execute(c))
    const categories = await categoryRepository.findAll()

    expect(categories.length).toBe(3)
  })
})