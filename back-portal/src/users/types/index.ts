import { ApiProperty } from "@nestjs/swagger"

export class LoginUserRequest {
  @ApiProperty({example: 'Ivan'})
  username: string

  @ApiProperty({example: 'ivan123'})
  password: string
}

export class LoginUserResponse {
  @ApiProperty({
    example: {
      user: {
        userId: 1,
        username: 'Ivan',
        password: 'ivan123',
      },
    },
  })
  user: {
    userId: number;
    username: string;
    password: string;
  };

  @ApiProperty({ example: 'Logged in' })
  msg: string;
}

export class LogoutUserResponse {
  @ApiProperty({example: 'Sessions has ended'})
  msg: string
}

export class LoginCheckResponse {
  @ApiProperty({example: 1})
  userId: number

  @ApiProperty({example: 'Ivan'})
  username: string

  @ApiProperty({example: 'ivan123'})
  password: string
}

export class SignupResponse {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Ivan' })
  username: string;

  @ApiProperty({
    example: '$2b$10$90H0Hn',
  })
  password: string;

  @ApiProperty({ example: 'ivan@gmail.com' })
  email: string;

  @ApiProperty({ example: '2023-03-17T17:23:33.502Z' })
  updatedAt: string;

  @ApiProperty({ example: '2023-03-17T17:23:33.502Z' })
  createdAt: string;
}