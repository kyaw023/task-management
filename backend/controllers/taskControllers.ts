import { Request, RequestHandler, Response } from "express";
import Task from "../models/TaskModel";
import mongoose from "mongoose";

export const createTask = async (req: Request, res: Response) => {
  try {
    const { title, status, priority, dueDate } = req.body;

    const task = await Task.create({
      title,
      status,
      priority,
      dueDate,
    });
    res
      .status(201)
      .json({ message: "Task created successfully.", success: true, task });
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ message: "Failed to create task." });
  }
};

export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const sortField = (req.query.sort as string) || "createdAt"; // Default sort field
    const order = req.query.order === "desc" ? -1 : 1;

    const totalTask = await Task.countDocuments();
    const totalPages = Math.ceil(totalTask / limit);

    const tasks = await Task.find()
      .sort({ [sortField]: order })
      .skip((page - 1) * limit)
      .limit(limit);

    // Base URL
    const baseUrl = `${req.protocol}://${req.get("host")}${req.path}`;

    // Construct meta links
    const firstPage = `${baseUrl}?page=1&limit=${limit}&sort=${sortField}&order=${req.query.order}`;
    const lastPage = `${baseUrl}?page=${totalPages}&limit=${limit}&sort=${sortField}&order=${req.query.order}`;
    const prevPage =
      page > 1
        ? `${baseUrl}?page=${page - 1}&limit=${limit}&sort=${sortField}&order=${req.query.order}`
        : null;
    const nextPage =
      page < totalPages
        ? `${baseUrl}?page=${page + 1}&limit=${limit}&sort=${sortField}&order=${req.query.order}`
        : null;

    res.status(200).json({
      message: "Tasks fetched successfully.",
      tasks,
      pagination: {
        totalTasks: totalTask,
        totalPages,
        currentPage: page,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
        nextPage: nextPage,
        prevPage: prevPage,
        pageSize: tasks.length,
        links: {
          first: firstPage,
          last: lastPage,
          prev: prevPage,
          next: nextPage,
        },
      },
    });
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ message: "Failed to fetch tasks." });
  }
};

export const updateTask: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<any> => {
  try {
    const { id } = req.params;

    const { title, status, priority, dueDate } = req.body;

    if (mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid task ID." });
    }

    const isExistedTask = await Task.findOne({ _id: id });

    if (!isExistedTask) {
      return res.status(404).json({ message: "Task not found." });
    }

    const task = await Task.findByIdAndUpdate(
      id,
      {
        title,
        status,
        priority,
        dueDate,
      },
      { new: true },
    );
    return res.status(200).json({
      message: "Task updated successfully.",
      success: true,
      task,
    });
  } catch (error) {
    console.error("Error updating task:", error);
    return res.status(500).json({ message: "Failed to update task." });
  }
};

export const deleteTask: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<any> => {
  try {
    const { id } = req.params;

    if (mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid task ID." });
    }
    const isExistedTask = await Task.findOne({ _id: id });
    if (!isExistedTask) {
      return res.status(404).json({ message: "Task not found." });
    }
    const task = await Task.findByIdAndDelete(id);
    return res.status(200).json({
      message: "Task deleted successfully.",
      success: true,
      task,
    });
  } catch (error) {
    console.error("Error deleting task:", error);
    return res.status(500).json({ message: "Failed to delete task." });
  }
};
