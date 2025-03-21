import { Package } from "./package.types";

export interface UserRegister {
  name: string;
  lastname: string;
  password: string;
  confirmpassword: string;
  email: string;
  urlphoto: string;
  is_admin?: boolean;
}
export interface User {
  _id: string;
  name: string;
  lastname: string;
  email: string;
  is_admin: boolean;
  is_able_to_deliver: boolean;
  is_disabled: boolean;
  urlphoto: string;
  is_deleted: boolean;
  resetToken?: string;
  pendingPackages: Package[];
  currentPackage: Package | null;
  historyPackages: Package[];
  token: string;
  urlpicture: string | null;
}
export interface UserLogin {
  email: string;
  password: string;
}
export interface UserEditActive {
  is_disabled: boolean;
  _id: string;
}

export interface initialStateDelivery {
  deliveryPeople: User[];
}
