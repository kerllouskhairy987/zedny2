export type JWTPayload = {
    id: number,
    username: string,
    email: string,
    isAdmin: boolean,
    createdAt: Date,
    updatedAt: Date
}