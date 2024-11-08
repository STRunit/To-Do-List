import { TaskModel } from "@/graphql/models";

export const getDoneTasks = async () => {
  try {
    const tasksDone = await TaskModel.find({ isDone: true });
    return tasksDone;
  } catch (error) {
    throw new Error("Done tasks fetch failed");
  }
};
