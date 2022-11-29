import {IsNotEmpty, IsString, IsOptional} from "class-validator"

export class NewConnectionDto {
    @IsString()
    @IsNotEmpty()
    provider: String;

    @IsString()
    @IsOptional()
    basicAuthUsername: String

    @IsString()
    @IsOptional()
    basicAuthPassword: String

    @IsString()
    @IsOptional()
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
