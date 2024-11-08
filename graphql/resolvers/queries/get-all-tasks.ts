import { TaskModel } from "@/graphql/models";

export const getAllTasks = async () => {
  try {
    const tasksUndone = await TaskModel.find({ isDone: false });
    return tasksUndone;
  } catch (error) {
    throw new Error("Undone tasks fetch failed");
  }
};
