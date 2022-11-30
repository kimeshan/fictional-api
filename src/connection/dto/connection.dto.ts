import {IsNotEmpty, IsString, IsOptional, IsEnum} from "class-validator"

export enum ConnectionMethod {
    GET = 'get',
    POST = 'post',
}
  
export class NewConnectionDto {
    @IsString()
    @IsNotEmpty()
    provider: string;

    @IsString()
    @IsOptional()
    basicAuthUsername: string

    @IsString()
    @IsOptional()
    basicAuthPassword: string

    @IsString()
    @IsOptional()
    accessToken: string
}

export class CallApiDto {
    @IsString()
    @IsNotEmpty()
    reference: string;

    @IsString()
    @IsNotEmpty()
    path: string;

    @IsEnum(ConnectionMethod)
    @IsNotEmpty()
    connectionMethod: string;
}
