import { updateTask } from "@/graphql/resolvers/mutations";

jest.mock("../../graphql/models", () => ({
  TaskModel: {
    findByIdAndUpdate: jest
      .fn()
      .mockResolvedValueOnce({
        _id: "1",
        taskName: "Updated Task",
        priority: 2,
        isDone: true,
        updatedAt: new Date(),
      })
      .mockResolvedValueOnce(null)
      .mockRejectedValueOnce(new Error("Database error")),
  },
}));

describe("Update Task Mutation", () => {
  it("Should update task", async () => {
    const result = await updateTask(
      {},
      { input: { taskId: "1", taskName: "test", priority: 1, isDone: true } }
    );

    expect(result).toEqual({
      _id: "1",
      taskName: "Updated Task",
      priority: 2,
      isDone: true,
      updatedAt: expect.any(Date),
    });
  });

  it("Should throw an error if the task is not found", async () => {
    try {
      await updateTask(
        {},
        { input: { taskId: "999", taskName: "test", priority: 1 } }
      );
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toEqual("Failed to update task");
      } else {
        fail("Expected error to be an instance of Error");
      }
    }
  });

  it("Should throw an error if there is a database error", async () => {
    try {
      await updateTask(
        {},
        { input: { taskId: "1", taskName: "test", priority: 1 } }
      );
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toEqual("Failed to update task");
      } else {
        fail("Expected error to be an instance of Error");
      }
    }
  });
});
