import { AnimatePresence, motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Calendar } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox.tsx";
import { Button } from "@/components/ui/button.tsx";

import { getPriorityIcon } from "@/utils/getPriorityIcon.tsx";
import { getStatusColor } from "@/utils/getStatusColor.tsx";
import { Task } from "@/types/task.types.ts";

const TaskCardComponent = ({ tasks }: { tasks: Task[] }) => {
  return (
    <AnimatePresence>
      {tasks.map((task) => (
        <motion.div
          key={task.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <Badge
                  className={`${getStatusColor(task.status as Task["status"])} text-white`}
                >
                  {task.status}
                </Badge>
                {getPriorityIcon(task.priority as Task["priority"])}
              </div>
              <CardTitle className="text-xl mt-2">{task.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-2" />
                Due: {task.dueDate}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <Checkbox id={`task-${task.id}`} />
                <label
                  htmlFor={`task-${task.id}`}
                  className="text-sm text-gray-500 ml-2"
                >
                  Mark as complete
                </label>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </AnimatePresence>
  );
};
export default TaskCardComponent;
