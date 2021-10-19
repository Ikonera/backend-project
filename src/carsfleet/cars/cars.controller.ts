import { Controller, Get, Post, Put, Delete, Param, Body, UseFilters } from '@nestjs/common';
import { CreateCarDto } from '../dto/CreateCarDto.dto';
import { CarsService } from "./cars.service";
import { ModifyCarByImmatDto } from "../dto/ModifyCarByImmatDto.dto";
import { DeleteCarByImmatDto } from "../dto/DeleteCarByImmatDto.dto";
import { GetCarByImmatDto } from "../dto/GetCarByImmatDto.dto";
import { Car } from '../schemas/Car.schema';
import { ErrorDto } from '../dto/ErrorDto.dto';


@Controller('cars')
export class CarsController {

	constructor(
		private readonly carsService: CarsService
	) {}

	@Get("/cars")
	async getAllCars(): Promise<Car[]> {
		try {
			return await this.carsService.getAllCars()
		} catch (e) {
			console.log(e)
		}
	}

	@Get("/car/:immatriculation")
	async getCarByImmat(
		@Param() getCarByImmatDto: GetCarByImmatDto
	): Promise<Car> {
		try {
			return await this.carsService.getCarByImmat(getCarByImmatDto)
		} catch (e) {
			console.log(e)
		}
	}

	@Post("/car")
	async setNewCar(
		@Body() createCarDto: CreateCarDto
	): Promise<Car | ErrorDto> {
		try {
			return await this.carsService.registerNewCar(createCarDto)
		} catch (e) {
			return e
		}
	}

	@Put("car/:immatriculation")
	async mofifyCarBuImmat(
		@Param() getCarByImmatDto: GetCarByImmatDto,
		@Body() modifyCarByImmatDto : ModifyCarByImmatDto
	): Promise<Car | ErrorDto> {
		try {
			return await this.carsService.modifyCarByImmat(getCarByImmatDto, modifyCarByImmatDto)
		} catch (e) {
			console.log(e)
		}
	}

	@Delete("/car/:immatriculation")
	async deleteCarByImmat(
		@Param() deleteCarByImmatDto: DeleteCarByImmatDto
	): Promise<Car> {
		try {
			return await this.carsService.deleteCarByImmat(deleteCarByImmatDto)
		} catch (e) {
			console.log(e)
		}
	}

}
