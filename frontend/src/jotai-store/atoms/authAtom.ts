import { atom } from "jotai";

type CreateUserAtom = {
    email:string,
    username: string,
    password: string
  };
  
  // Define the initial state of your atom
  const CreateUserState: CreateUserAtom = {
    email: "",
    username: "",
    password: ""
  };
  
  // Create the atom
  export const userCreationAtom = atom(CreateUserState);


  type UserAuthAtom = {
    isAuthenticated:boolean;
  };
  
  // Define the initial state of your atom
  const UserAuthState: UserAuthAtom = {
    isAuthenticated: false
  };
  
  // Create the atom
  export const userAuthAtom = atom(CreateUserState);