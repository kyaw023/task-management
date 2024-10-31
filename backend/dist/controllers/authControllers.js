"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const UserModel_1 = __importDefault(require("../models/UserModel"));
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, role } = req.body;
    try {
        // Check if user already exists
        const isUserExisted = yield UserModel_1.default.findOne({ email });
        if (isUserExisted) {
            return res.status(409).json({ message: "Email already exists." }); // 409 Conflict
        }
        // Hash the password
        const salt = yield bcrypt_1.default.genSalt(10);
        const hashedPassword = yield bcrypt_1.default.hash(password, salt);
        // Create a new user
        const user = yield UserModel_1.default.create({
            name,
            email,
            password: hashedPassword,
            role,
        });
        return res.status(201).json({
            message: "Registration successful",
            success: true,
            user: user,
        });
    }
    catch (error) {
        console.error(error); // Log the error for debugging
        return res.status(500).json({
            message: "An error occurred during registration.",
            success: false,
            error: error.message,
        });
    }
});
exports.registerUser = registerUser;
