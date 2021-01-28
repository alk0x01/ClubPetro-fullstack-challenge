// eslint-disable-next-line prettier/prettier
import { Controller, Post, Body, Get, Delete, Param, Put } from '@nestjs/common';
import { PlaceService } from '../service/place.service';
import { Place } from '../model/place.interface';

@Controller('places')
export class PlaceController {
  constructor(private PlaceService: PlaceService) {}

  @Post()
  create(@Body() place: Place) {
    return this.PlaceService.createPlace(place);
  }

  @Get()
  findAll() {
    return this.PlaceService.findAllPlaces();
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return this.PlaceService.deletePlace(id);
  }

  @Put(':id')
  updateOne(@Param('id') id: string, @Body() place: Place) {
    return this.PlaceService.updatePlace(id, place);
  }
}
