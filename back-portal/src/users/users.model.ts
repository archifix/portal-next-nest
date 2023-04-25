import { Column, Model, Table } from 'sequelize-typescript';

interface UserCreationsAttrs {
  username: string
  password: string
  email: string
}

@Table
export class User extends Model<User, UserCreationsAttrs> {
  @Column
  username: string

  @Column
  password: string

  @Column({
    unique: true
  })
  email: string
}
 