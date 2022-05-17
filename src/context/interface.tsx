export interface AuthContextProps {
    children: any
}

export type AuthLogin = (name: string, lastName: string, email: string, password: string) => Promise< any | undefined>