export interface AuthContextProps {
    children: any
}

export type AuthLogout = () => void

export type AuthSignUp = (name: string, lastName: string, email: string, password: string) => Promise< any | undefined>

export type AuthLogin = (email: string, password: string) => Promise< any | undefined>