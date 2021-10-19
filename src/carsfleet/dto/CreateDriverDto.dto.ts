import { Car } from "../schemas/Car.schema"

export class CreateDriverDto {
    name: string
    lastname: string
    drives?: Car | Array<Car>
}
