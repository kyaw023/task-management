import React, { useState } from "react";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Plus } from "lucide-react";

import {
  AddTaskModalComponent,
  FilterTaskComponent,
  SearchTaskComponent,
  SortTaskComponent,
  TaskCardComponent,
} from "@/components";
import { Task } from "@/types/task.types.ts";

const mockTasks: Task[] = [
  {
    id: 1,
    title: "Complete project proposal",
    status: "In Progress",
    priority: "High",
    dueDate: "2024-03-15",
  },
  {
    id: 2,
    title: "Review code changes",
    status: "Pending",
    priority: "Medium",
    dueDate: "2024-03-10",
  },
  {
    id: 3,
    title: "Update documentation",
    status: "Completed",
    priority: "Low",
    dueDate: "2024-03-05",
  },
  {
    id: 4,
    title: "Schedule team meeting",
    status: "In Progress",
    priority: "Medium",
    dueDate: "2024-03-20",
  },
  {
    id: 5,
    title: "Prepare presentation",
    status: "Pending",
    priority: "High",
    dueDate: "2024-03-18",
  },
];

const TaskPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <Card className="bg-gradient-to-r from-teal-500 to-blue-500 text-white">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Task Management</CardTitle>
          <CardDescription className="text-white/80">
            Organize and track your tasks efficiently
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
            <SearchTaskComponent mockTasks={mockTasks} setTasks={setTasks} />
            <div className="flex space-x-2 w-full md:w-auto">
              <SortTaskComponent tasks={tasks} setTasks={setTasks} />
              <FilterTaskComponent mockTasks={mockTasks} setTasks={setTasks} />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <TaskCardComponent tasks={tasks} />
      </div>

      <div>
        <AddTaskModalComponent
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />

        <Button
          onClick={() => setIsModalOpen(true)}
          className="fixed bottom-8 right-8 rounded-full w-16 h-16 shadow-lg bg-teal-500 hover:bg-teal-600 transition-all duration-300"
        >
          <Plus className="w-8 h-8 text-white" />
        </Button>
      </div>
    </div>
  );
};

export default TaskPage;
