import * as mongoose from "mongoose"
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Driver } from "./Driver.schema"

@Schema()
export class Car {
	@Prop({ required: true, unique: true })
	immatriculation!: string

	@Prop({ type: String })
	model: string

	@Prop({ type: Date, required: true })
	firstCommissioningDate: Date

	@Prop({ type: String })
	brand: string

	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Drivers" })
	driver: Driver
}

export type CarDocument = Car & Document
export const CarSchema = SchemaFactory.createForClass(Car)
