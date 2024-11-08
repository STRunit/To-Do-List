import { UpdateTaskInput } from "@/generated";
import { TaskModel } from "@/graphql/models";

export const updateTask = async (
  _: unknown,
  { input }: { input: UpdateTaskInput }
) => {
  try {
    const { taskName, priority, isDone } = input;
    const updatedTask = await TaskModel.findByIdAndUpdate(
      { _id: input.taskId },
      {
        taskName,
        priority,
        isDone,
        updatedAt: new Date(),
      },
      { new: true }
    );

    if (!updatedTask) {
      throw new Error("Task not found");
    }
    return updatedTask;
  } catch (error) {
    throw new Error("Failed to update task");
  }
};
