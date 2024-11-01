import { Schema, model, Document } from "mongoose";

export interface ITask extends Document {
  title: string;
  status: "In Progress" | "Pending" | "Completed";
  priority: "High" | "Medium" | "Low";
  dueDate: string;
}

const taskSchema: Schema = new Schema<ITask>(
  {
    title: { type: String, required: true },
    status: {
      type: String,
      enum: ["In Progress", "Pending", "Completed"],
      default: "Pending",
    },
    priority: {
      type: String,
      enum: ["High", "Medium", "Low"],
      default: "Medium",
    },
    dueDate: { type: String, required: true },
  },
  { timestamps: true },
);

export default model<ITask>("Task", taskSchema);
