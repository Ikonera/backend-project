import * as mongoose from "mongoose"
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { CarDocument } from "./Car.schema"

@Schema()
export class Driver {
	@Prop({ required: true, type: String })
	name: string

	@Prop({ required: true, type: String })
	lastname: string

	@Prop({ type: Array(mongoose.Schema.Types.ObjectId), ref: "Cars" })
	drives: CarDocument | Array<CarDocument>
}

export type DriverDocument = Driver & Document
export const DriverSchema = SchemaFactory.createForClass(Driver)
