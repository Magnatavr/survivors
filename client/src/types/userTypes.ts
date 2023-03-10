export type UserFromBackand = {
    id:number;
    name: string;
}

export type UserLoginForm = {
    email:string;
    password:string;
}
export type UserSignUpForm = {
    email:string;
    name:string;
    password:string;
}

export type UserType = {
    user?: UserFromBackand;
    status: 'fetching' | 'logged' | 'err' | 'idle'
}