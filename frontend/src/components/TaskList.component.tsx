import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Calendar } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Task {
  id: string;
  title: string;
  status: "todo" | "in-progress" | "done";
  priority: "low" | "medium" | "high";
  dueDate: string;
}

const tasks: Task[] = [
  {
    id: "1",
    title: "Create new landing page",
    status: "in-progress",
    priority: "high",
    dueDate: "2023-06-30",
  },
  {
    id: "2",
    title: "Update user documentation",
    status: "todo",
    priority: "medium",
    dueDate: "2023-07-15",
  },
  {
    id: "3",
    title: "Fix navigation bug",
    status: "done",
    priority: "high",
    dueDate: "2023-06-25",
  },
  {
    id: "4",
    title: "Implement dark mode",
    status: "in-progress",
    priority: "low",
    dueDate: "2023-07-10",
  },
  {
    id: "5",
    title: "Optimize database queries",
    status: "todo",
    priority: "medium",
    dueDate: "2023-07-20",
  },
];

interface TaskListProps extends React.HTMLAttributes<HTMLDivElement> {}

const TaskListComponent: React.FC<TaskListProps> = ({
  className,
  ...props
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "todo":
        return "bg-blue-500";
      case "in-progress":
        return "bg-yellow-500";
      case "done":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "low":
        return "bg-gray-500";
      case "medium":
        return "bg-orange-500";
      case "high":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>Task List</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {tasks.map((task) => (
            <Card
              key={task.id}
              className="overflow-hidden transition-shadow hover:shadow-md"
            >
              <CardContent className="p-0">
                <div className="flex items-center p-4">
                  <Checkbox id={task.id} className="mr-4" />
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold">{task.title}</h3>
                    <div className="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{task.dueDate}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge
                      variant="outline"
                      className={`${getStatusColor(task.status)} text-white`}
                    >
                      {task.status}
                    </Badge>
                    <Badge
                      variant="outline"
                      className={`${getPriorityColor(task.priority)} text-white`}
                    >
                      {task.priority}
                    </Badge>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Edit Task</DropdownMenuItem>
                        <DropdownMenuItem>Change Status</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          Delete Task
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskListComponent;
