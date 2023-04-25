import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreatePostDto {
  @ApiProperty({example: 'Новость дня'})
  @IsNotEmpty()
  readonly title: string

  @ApiProperty({example: 'Пошел сильный снег......'})
  @IsNotEmpty()
  readonly content: string

  @ApiProperty({example: 'ivan@gmail.com'})
  @IsNotEmpty()
  readonly image: string

  readonly userId: number
}