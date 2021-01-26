// eslint-disable-next-line prettier/prettier
import { Controller, Post, Body, Get, Delete, Param, Put } from '@nestjs/common';
import { PlaceService } from '../service/place.service';
import { Place } from '../model/place.interface';

@Controller('places')
export class PlaceController {
  constructor(private PlaceService: PlaceService) {}

  @Post()
  create(@Body() place: Place) {
    return this.PlaceService.create(place);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.PlaceService.findOne(id);
  }

  @Get()
  findAll() {
    return this.PlaceService.findAll();
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return this.PlaceService.deleteOne(id);
  }

  @Put(':id')
  updateOne(@Param('id') id: string, @Body() place: Place) {
    return this.PlaceService.updateOne(id, place);
  }
}
