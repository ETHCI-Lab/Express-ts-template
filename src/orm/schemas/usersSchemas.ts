import { model, Schema } from "mongoose";
import { Users } from "../../interfaces/Users";

export const usersSchemas = new Schema<Users>({
    _id:{ type: String, required: false },
    name:{ type: String, required: false },
    username:{ type: String, required: false },
    email:{ type: String, required: false },
    emailVerified:{ type: String, required: false },
    password:{ type: String, required: false },
    avatar:{ type: String, required: false },
    provider:{ type: String, required: false },
    role:{ type: String, required: false },
    plugins:{ type: [String], required: false },
    termsAccepted:{ type: Boolean, required: false },
    refreshToken:{ type: [String], required: false },
    createdAt:{ type: String, required: false },
    updatedAt:{ type: String, required: false },
    __v:{ type: String, required: false },
});

export const usersModel = model<Users>('users', usersSchemas);