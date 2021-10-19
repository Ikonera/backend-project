import { Driver } from "../schemas/Driver.schema"

export class CreateCarDto {
	immatriculation: string
	model: string
	firstCommissioningDate: Date
	brand: string
	driver?: Driver
}
