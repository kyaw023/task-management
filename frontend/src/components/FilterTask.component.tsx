import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import { useState } from "react";
import { Task } from "@/types/task.types.ts";

interface FilterTaskProps {
  mockTasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const FilterTaskComponent = ({ mockTasks, setTasks }: FilterTaskProps) => {
  const [filterStatus, setFilterStatus] = useState<Task["status"] | "All">(
    "All",
  );

  const handleFilter = (value: Task["status"] | "All") => {
    setFilterStatus(value);
    const filteredTasks =
      value === "All"
        ? mockTasks
        : mockTasks.filter((task) => task.status === value);
    setTasks(filteredTasks);
  };
  return (
    <Select value={filterStatus} onValueChange={handleFilter}>
      <SelectTrigger className="w-[180px] bg-white/20 text-white border-none">
        <SelectValue placeholder="Filter by status" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="All">All</SelectItem>
        <SelectItem value="In Progress">In Progress</SelectItem>
        <SelectItem value="Pending">Pending</SelectItem>
        <SelectItem value="Completed">Completed</SelectItem>
      </SelectContent>
    </Select>
  );
};
export default FilterTaskComponent;
