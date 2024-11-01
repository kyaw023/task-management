import express from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  updateTask,
} from "../controllers/taskControllers";

const router = express.Router();

router.post("/create-task", createTask);
router.get("/get-tasks", getAllTasks);
router.patch("/update-task/:id", updateTask);
router.delete("/delete-task/:id", deleteTask);

export default router;
