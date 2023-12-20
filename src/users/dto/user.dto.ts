import { IsString, IsNotEmpty, IsEmail, Length, Matches } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateUserDto {
  @IsString()
  @IsEmail()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  readonly password: string;

  @IsNotEmpty()
  readonly role: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
