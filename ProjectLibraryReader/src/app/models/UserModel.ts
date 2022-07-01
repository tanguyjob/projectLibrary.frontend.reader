export class UserModel {
    id!:number;
    name!:string;
    firstname!:string;
    birthdate!:Date;
    email!:string;
    password!:string;
    phone!:number;
    isActive!:boolean;
    fK_User_Address!:number;
    fK_User_Subscription!:number;
    fK_User_Profile!:number
}