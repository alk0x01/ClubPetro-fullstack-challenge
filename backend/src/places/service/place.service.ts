import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { PlaceEntity } from '../model/place.entity';
import { Repository } from 'typeorm';
import { Place } from '../model/place.interface';

@Injectable()
export class PlaceService {
  constructor(
    @InjectRepository(PlaceEntity)
    private readonly PlaceRepository: Repository<PlaceEntity>,
  ) {}

  async create(place: Place) {
    const placeVerify = await this.PlaceRepository.findOne({
      where: { pais: place.pais, local: place.local },
    });
    if (placeVerify) {
      throw new Error("country and place can't be duplicated");
    }
    try {
      const newPlace = this.PlaceRepository.create(place);
      return await this.PlaceRepository.save(newPlace);
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll() {
    const allPlaces = await this.PlaceRepository.find();

    allPlaces.sort((obj1, obj2) => {
      const data1 = obj1.meta.split('/').reverse();
      const data2 = obj2.meta.split('/').reverse();

      const date1 = new Date(data1[0]);
      const date2 = new Date(data2[0]);

      if (date1 < date2) return -1;
      if (date1 > date2) return 1;

      return 0;
    });

    return allPlaces;
  }

  async findOne(id: string) {
    const place = this.PlaceRepository.findOne(id);
    return place;
  }

  async deleteOne(id: string) {
    return await this.PlaceRepository.delete({ id: id });
  }

  async updateOne(id: string, place: Place) {
    const placeUpdate = await this.PlaceRepository.findOne({
      where: { id: id },
    });
    if (!placeUpdate) {
      throw new Error('Place not exist');
    }
    try {
      placeUpdate.meta = place.meta;
      placeUpdate.local = place.local;
      return await this.PlaceRepository.save(placeUpdate);
    } catch (error) {
      throw new Error(error);
    }
  }
}
