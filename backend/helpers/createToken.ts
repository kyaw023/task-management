import jwt from "jsonwebtoken";

export const createToken = (_id: string) => {
  return jwt.sign({ id: _id }, process.env.JWT_SECRET as string, {
    expiresIn: "1d",
  });
};
