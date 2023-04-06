import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UsersService } from './users.service';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { AddRoleDto } from 'src/dto/add-role.dto';
import { BanUserDto } from 'src/dto/ban-user.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { User } from './user.model';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiOperation({ summary: 'Создание пользователя' })
  @ApiResponse({ status: 200, type: User })
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }

  @ApiOperation({ summary: 'Получить всех пользователей' })
  @ApiResponse({ status: 200, type: [User] })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }

  @ApiOperation({ summary: 'Выдать роль' })
  @ApiResponse({ status: 200 })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post('/role')
  addRole(@Body() dto: AddRoleDto) {
    return this.userService.addRole(dto);
  }

  @ApiOperation({ summary: 'Забанить пользователя' })
  @ApiResponse({ status: 200 })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post('/ban')
  ban(@Body() dto: BanUserDto) {
    return this.userService.ban(dto);
  }
}