import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Driver, DriverDocument } from "../schemas/Driver.schema";
import { CreateDriverDto } from "../dto/CreateDriverDto.dto";
import { GetDriverByIdDto } from "../dto/GetDriverByIdDto.dto";
import { ModifyDriverByIdDto } from "../dto/ModifyDriverByIdDto.dto";
import { DeleteDriverByIdDto } from "../dto/DeleteDriverByIdDto.dto";

@Injectable()
export class DriversService {

	constructor(
		@InjectModel(Driver.name) private driverModel: Model<DriverDocument>
	) {}

	getAllDrivers = async (): Promise<Driver[]> => {
		try {
			return await this.driverModel.find()
		} catch (e) {
			console.log(e)
		}
	}

	getDriverById = async (getDriverByIdDto: GetDriverByIdDto): Promise<Driver> => {
		try {
			return await this.driverModel.findById(getDriverByIdDto)
		} catch (e) {
			console.log(e)
		}
	}

	setNewDriver = async (createDriverDto: CreateDriverDto): Promise<Driver> => {
		try {
			const createdDriver = new this.driverModel(createDriverDto)
			return await createdDriver.save()
		} catch (e) {
			console.log(e)
		}
	}

	modifyDriver = async (getDriverByIdDto: GetDriverByIdDto, modifyDriverByIdDto: ModifyDriverByIdDto): Promise<Driver> => {
		try {
			return await this.driverModel.findOneAndUpdate({
				_id: getDriverByIdDto
			}, modifyDriverByIdDto)
		} catch (e) {
			console.log(e)
		}
	}

	deleteDriverById = async (deleteDriverByIdDto: DeleteDriverByIdDto): Promise<Driver> => {
		try {
			return await this.driverModel.findByIdAndRemove(deleteDriverByIdDto)
		} catch (e) {
			console.log(e)
		}
	}

}
