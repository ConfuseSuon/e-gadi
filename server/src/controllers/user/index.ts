import bcrypt from "bcrypt";
import { Request, Response } from "express";
import User from "../../models/User";
import { IUser } from "../../types";
import { Generic_Msg, userMsg } from "../../utils/constant";
import { encryptPassword, generateJwtToken } from "../../utils/help";

export const registerUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    console.log("first");
    const { full_name, email, password, address, contact_number, socialMedia } =
      req.body as Pick<
        IUser,
        | "full_name"
        | "email"
        | "password"
        | "contact_number"
        | "address"
        | "socialMedia"
      >;
    console.log("2");

    // Checking User
    const user = await User.findOne({ email });
    if (user) return res.status(400).send({ message: userMsg.exist });

    // Hashing User Password
    const saltRounds = 10;
    const hashedPassword = await encryptPassword(password, saltRounds);

    // Save User Into Database
    const userData = new User({
      full_name,
      email,
      password: hashedPassword,
      address,
      contact_number,
      socialMedia,
    });
    const savedUserData = await userData.save();

    const token = await generateJwtToken(
      { id: savedUserData._id, full_name: savedUserData.full_name },
      "2h"
    );

    return res
      .status(200)
      .json({ accessToken: token, message: "Sucessfully, user registered" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: Generic_Msg.Server_Error, error: error });
  }
};
