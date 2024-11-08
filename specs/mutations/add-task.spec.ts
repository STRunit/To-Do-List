import { addTask } from "../../graphql/resolvers/mutations/add-task";

jest.mock("../../graphql/models/", () => ({
  TaskModel: {
    create: jest
      .fn()
      .mockReturnValueOnce({
        taskName: "test",
        priority: 1,
      })
      .mockRejectedValue(Error("Failed to add task")),
  },
}));

describe("Add Task Mutation", () => {
  it("should add task", async () => {
    const result = await addTask!(
      {},
      { input: { taskName: "test", priority: 1 } }
    );

    expect(result).toEqual({
      taskName: "test",
      priority: 1,
    });
  });

  it("should throw and error", async () => {
    try {
      await addTask!({}, { input: { taskName: "test", priority: 1 } });
    } catch (error) {
      expect(error).toEqual(new Error("Failed to add task"));
    }
  });
});
