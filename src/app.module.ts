import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Human } from './entities/human.entity';
import { Clerk } from './entities/clerk.entity';
import { Coach } from './entities/coach.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'bfchkp',
      logging: false,
      synchronize: true,
      entities: [User, Human, Clerk, Coach],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
