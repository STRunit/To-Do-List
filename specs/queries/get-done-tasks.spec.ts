import { getDoneTasks } from "@/graphql/resolvers/queries";

jest.mock("../../graphql/models", () => ({
  TaskModel: {
    find: jest
      .fn()
      .mockResolvedValueOnce([
        { taskName: "Task 1", priority: 1, isDone: true },
      ])
      .mockRejectedValueOnce(new Error("Database Error")),
  },
}));

describe("Get Done Tasks Query", () => {
  it("Should return all done tasks", async () => {
    const result = await getDoneTasks();
    expect(result).toEqual([{ taskName: "Task 1", priority: 1, isDone: true }]);
  });

  it("Should throw an error when fetching done tasks fails", async () => {
    try {
      await getDoneTasks();
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toEqual("Done tasks fetch failed");
      } else {
        throw new Error("Unexpected error type");
      }
    }
  });
});
