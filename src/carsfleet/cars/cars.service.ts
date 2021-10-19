import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Error, Model } from "mongoose";
import { CreateCarDto } from '../dto/CreateCarDto.dto';
import { DeleteCarByImmatDto } from '../dto/DeleteCarByImmatDto.dto';
import { GetCarByImmatDto } from '../dto/GetCarByImmatDto.dto';
import { ModifyCarByImmatDto } from '../dto/ModifyCarByImmatDto.dto';
import { Car, CarDocument } from "../schemas/Car.schema";

@Injectable()
export class CarsService {

	constructor(
		@InjectModel(Car.name) private carModel: Model<CarDocument>
	) {}

	getAllCars = async () => {
		try {
			const result = await this.carModel.find()
			return result
		} catch (e) {
			return e
		}
	}

	getCarByImmat = async (getCarByImmatDto: GetCarByImmatDto): Promise<Car> => {
		try {
			const result = await this.carModel.findOne(getCarByImmatDto)
			return result
		} catch (e) {
			return e
		}
	}

	registerNewCar = async (createCarDto: CreateCarDto) => {
		try {
			const createdCar = new this.carModel(createCarDto)
			return await createdCar.save().catch(error => {
				if (error.code === 11000) {
					return {
						error: "Non unique.",
						message: "Deux voitures ont le même code d'immatriculation, veuillez réessayer avec un autre !"
					}
				}
				else {
					return {
						name: error.name,
						message: error.message
					}
				}
			})
		}
		catch(e) {
			return e
		}
	}

	modifyCarByImmat = async (getCarByImmatDto: GetCarByImmatDto, modifyCarByImmatDto: ModifyCarByImmatDto) => {
		try {
			return await this.carModel.findOneAndUpdate(getCarByImmatDto, modifyCarByImmatDto).catch(error => {
				if (error.code === 11000) return {
					error: "Non unique.",
					message: "Deux voitures ont le même code d'immatriculation, veuillez réessayer avec un autre !"
				}
			})
		} catch (e) {
			e
		}
	}

	deleteCarByImmat = async (deleteCarByImmatDto: DeleteCarByImmatDto): Promise<Car> => {
		try {
			const result = await this.carModel.findOneAndDelete(deleteCarByImmatDto)
			return result
		} catch (e) {
			return e
		}
	}

}
