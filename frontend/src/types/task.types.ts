export interface Task {
  id: number;
  title: string;
  status: "In Progress" | "Pending" | "Completed";
  priority: "High" | "Medium" | "Low";
  dueDate: string;
}
