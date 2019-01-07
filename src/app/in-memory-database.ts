import { InMemoryDbService } from "angular-in-memory-web-api";
import { Category } from "./pages/categories/shared/category.model";

export class InMemoryDatabase implements InMemoryDbService{
    createDb(){
        const categories: Category[] = [
            { id: 1, name: "Moradia", description: "Pagametnos de contas de casa" },
            { id: 2, name: "Saude", description: "Plano de Saude e Remedios" },
            { id: 3, name: "Lazer", description: "Cinema, parques e praia" }
        ];

        return { categories };
    }
}