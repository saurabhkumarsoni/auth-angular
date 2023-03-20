export interface AuthResponse {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: string
}

export interface SignUp {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    returnSecureToken: boolean
    
}

export interface SignIn{
    username: string;
    password: string;
    returnSecureToken: boolean
}