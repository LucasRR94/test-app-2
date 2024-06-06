import { IsInt } from 'class-validator';

export class GetApiDto {
    @IsInt()
    id_user: number
}
