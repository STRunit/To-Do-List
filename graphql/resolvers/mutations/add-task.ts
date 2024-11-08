import { AddTaskInput } from "@/generated";
import { TaskModel } from "@/graphql/models";

export const addTask = async (
  _: unknown,
  { input }: { input: AddTaskInput }
) => {
  try {
    const { taskName, priority } = input;
    const newTask = await TaskModel.create({
      taskName,
      priority,
    });
    return newTask;
  } catch (error: any) {
    throw new Error("Failed to add task");
  }
};
