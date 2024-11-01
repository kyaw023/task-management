import { Task } from "@/types/task.types.ts";

export const getStatusColor = (status: Task["status"]) => {
  switch (status) {
    case "Completed":
      return "bg-green-500";
    case "In Progress":
      return "bg-blue-500";
    case "Pending":
      return "bg-yellow-500";
    default:
      return "bg-gray-500";
  }
};
