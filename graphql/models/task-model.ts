import mongoose, { model, Schema } from "mongoose";

const taskSchema = new Schema({
  taskName: {
    type: String,
    required: true,
    unique: true,
  },
  isDone: {
    type: Boolean,
    default: false,
  },
  priority: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date,
  },
  updatedAt: {
    type: Date,
    default: new Date,
  },
});

export const Task = mongoose.models.Task || model("Task", taskSchema);
