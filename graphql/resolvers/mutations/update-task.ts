import { MutationResolvers } from "@/generated";
import { Task } from "@/graphql/models";

export const updateTask: MutationResolvers["updateTask"] = async (
  _: unknown,
  { input }
) => {
  try {
    const { taskName, priority, isDone } = input;
    const updatedTask = await Task.findByIdAndUpdate(
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
    throw new Error("Task update failed");
  }
};
