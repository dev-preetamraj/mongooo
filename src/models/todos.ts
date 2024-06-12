import mongoose, { Document, Schema } from "mongoose";

export interface ITodo extends Document {
  _id: string;
  __v: number;
  title: string;
  description?: string;
  userId: mongoose.Schema.Types.ObjectId;
  isCompleted: boolean;
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const todoSchema = new Schema<ITodo>(
  {
    title: { type: String, required: true },
    description: { type: String },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    isCompleted: { type: Boolean, default: false },
    dueDate: { type: Date },
  },
  { timestamps: true }
);

const Todo = mongoose.models.todo || mongoose.model<ITodo>("todo", todoSchema);
export default Todo;
