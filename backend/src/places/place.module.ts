import { Module } from '@nestjs/common';
import { PlaceService } from './service/place.service';
import { PlaceController } from './controller/place.controllers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaceEntity } from './model/place.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PlaceEntity]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '',
      database: 'Places',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  providers: [PlaceService],
  controllers: [PlaceController],
})
export class PlaceModule {}
