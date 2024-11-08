import { MutationResolvers } from "@/generated";
import { Task } from "@/graphql/models";

export const addTask: MutationResolvers["addTask"] = async (
  _: unknown,
  { input }
) => {
  try {
    const { taskName, priority } = input;
    const newTask = await Task.create({
      taskName,
      priority,
    });
    return newTask;
  } catch (error) {
    console.error(error);
  }
};
