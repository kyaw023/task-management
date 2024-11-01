import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import { Task } from "@/types/task.types.ts";
import { useState } from "react";

interface SortTaskProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const SortTaskComponent = ({ tasks, setTasks }: SortTaskProps) => {
  const [sortBy, setSortBy] = useState<keyof Task>("dueDate");
  const handleSort = (value: keyof Task) => {
    setSortBy(value);
    const sortedTasks = [...tasks].sort((a, b) => {
      if (a[value] < b[value]) return -1;
      if (a[value] > b[value]) return 1;
      return 0;
    });
    setTasks(sortedTasks);
  };
  return (
    <Select value={sortBy} onValueChange={handleSort}>
      <SelectTrigger className="w-[180px] bg-white/20 text-white border-none">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="dueDate">Due Date</SelectItem>
        <SelectItem value="priority">Priority</SelectItem>
        <SelectItem value="status">Status</SelectItem>
      </SelectContent>
    </Select>
  );
};
export default SortTaskComponent;
