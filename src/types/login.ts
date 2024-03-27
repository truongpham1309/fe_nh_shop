export type TUser = {
    email: string,
    password: string,
}

export type TRegister = TUser & {
    username: string,
    image: string
}

