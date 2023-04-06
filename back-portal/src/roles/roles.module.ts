import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RoleController } from './roles.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from './roles.model';
import { User } from 'src/users/user.model';
import { UserRoles } from './user-roles.model';

@Module({
  providers: [RolesService],
  controllers: [RoleController],
  imports: [SequelizeModule.forFeature([Role, User, UserRoles])],
  exports: [RolesService],
})
export class RolesModule {}
