import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { Driver } from "../schemas/Driver.schema";
import { DriversService } from "./drivers.service";
import { CreateDriverDto } from "../dto/CreateDriverDto.dto";
import { GetDriverByIdDto } from "../dto/GetDriverByIdDto.dto";
import { DeleteDriverByIdDto } from "../dto/DeleteDriverByIdDto.dto";
import { ModifyDriverByIdDto } from "../dto/ModifyDriverByIdDto.dto";


@Controller('drivers')
export class DriversController {

	constructor(private readonly driversService: DriversService) {}

	@Get("/drivers")
	async getAllDrivers(): Promise<Driver[]> {
		try {
			return await this.driversService.getAllDrivers()
		} catch (e) {
			console.log(e)
		}
	}

	@Get("/driver/:driverId")
	async getDriverById(
		@Param() getDriverByIdDto: GetDriverByIdDto
	): Promise<Driver> {
		try {
			return await this.driversService.getDriverById(getDriverByIdDto)
		} catch (e) {
			console.log(e)
		}
	}
	
	@Post("/driver")
	async registerNewDriver(
		@Body() createDriverDto: CreateDriverDto
	): Promise<Driver> {
		try {
			return await this.driversService.setNewDriver(createDriverDto)
		} catch (e) {
			console.log(e)
		}
	}

	@Put("/driver/:_id")
	async modifyDriverById(
		@Param() getDriverByIdDto: GetDriverByIdDto,
		@Body() modifyDriverByIdDto: ModifyDriverByIdDto,
	) {
		try {
			return await this.driversService.modifyDriver(getDriverByIdDto, modifyDriverByIdDto)
		} catch (e) {
			console.log(e)
		}
	}

	@Delete("/driver/:_id")
	async deleteDriverById(
		@Param() deleteDriverByIdDto: DeleteDriverByIdDto
	): Promise<Driver> {
		try {
			return await this.driversService.deleteDriverById(deleteDriverByIdDto)
		} catch (e) {
			console.log(e)
		}
	}

}
