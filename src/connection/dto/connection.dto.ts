export interface NewConnectionDto {
    provider: String, 
    basicAuthUsername: String,
    basicAuthPassword: String,
    accessToken: String,
}

export interface CallApiDto {
    reference: String, 
    path: String,
    connectionMethod: String,
}