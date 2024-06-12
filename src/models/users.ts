import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  _id: string;
  __v: number;
  email: string;
  createdAt: string;
  updatedAt: string;
}

const userSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);
userSchema.index({ email: 1 }, { unique: true });
const User = mongoose.models.user || mongoose.model<IUser>("user", userSchema);
export default User;
