import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UsersModule, MongooseModule.forRoot('mongodb+srv://fabianhpauli:SUeCJY0MrOFmmmLp@clusterfabian.ip99u.mongodb.net/test') ],
  controllers: [],
  providers: []
})
export class AppModule {}
