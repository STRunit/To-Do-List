import { Task } from "@/graphql/models";

export const getDoneTasks = async () => {
  try {
    const tasksDone = await Task.find({ isDone: true });
    return tasksDone;
  } catch (error) {
    throw new Error("Done tasks fetch failed");
  }
};
