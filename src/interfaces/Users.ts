export interface Users{
    _id:string;
    name:string;
    username:string;
    email:string;
    emailVerified:string;
    password:string;
    avatar:string;
    provider:string;
    role:string;
    plugins:string[];
    termsAccepted:boolean;
    refreshToken:string[];
    createdAt:string;
    updatedAt:string;
    __v:string;
}