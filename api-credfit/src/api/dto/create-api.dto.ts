import { IsInt } from 'class-validator';

export class CreateApiDto {
    @IsInt()
    id_user: number
}
