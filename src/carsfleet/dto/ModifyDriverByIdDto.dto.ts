import { Car } from "../schemas/Car.schema";

export class ModifyDriverByIdDto {
	name?: string
	lastname?: string
	drives?: Car | Car[]
}
