import {IsNotEmpty, IsString} from "class-validator"

export class NewConnectionDto {
    @IsString()
    @IsNotEmpty()
    provider: String;

    @IsString()
    basicAuthUsername: String

    @IsString()
    basicAuthPassword: String

    @IsString()
    accessToken: String
}

export class CallApiDto {
    @IsString()
    @IsNotEmpty()
    reference: String;

    @IsString()
    @IsNotEmpty()
    path: String;

    @IsString()
    @IsNotEmpty()
    connectionMethod: String;
}
