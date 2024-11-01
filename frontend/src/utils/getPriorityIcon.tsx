import { AlertCircle } from "lucide-react";
import { Task } from "@/types/task.types.ts";

export const getPriorityIcon = (priority: Task["priority"]) => {
  switch (priority) {
    case "High":
      return <AlertCircle className="text-red-500" />;
    case "Medium":
      return <AlertCircle className="text-yellow-500" />;
    case "Low":
      return <AlertCircle className="text-green-500" />;
    default:
      return null;
  }
};
