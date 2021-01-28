import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import TestUtil from '../../shared/test/TestUtil';
import { PlaceEntity } from '../model/place.entity';
import { PlaceService } from './place.service';

describe('PlaceService', () => {
  let service: PlaceService;

  const mockRepository = {
    create: jest.fn(),
    save: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PlaceService,
        {
          provide: getRepositoryToken(PlaceEntity),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<PlaceService>(PlaceService);
  });

  beforeEach(() => {
    mockRepository.create.mockReset();
    mockRepository.save.mockReset();
    mockRepository.find.mockReset();
    mockRepository.findOne.mockReset();
    mockRepository.delete.mockReset();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createPlace', () => {
    it('should create a place', async () => {
      const place = TestUtil.guiveMeAPlace();
      mockRepository.create.mockReturnValue(place);
      mockRepository.save.mockReturnValue(place);
      const savedPlace = await service.createPlace(place);
      expect(savedPlace).toMatchObject(place);
      expect(mockRepository.create).toBeCalledTimes(1);
      expect(mockRepository.save).toBeCalledTimes(1);
    });
    it('should return one error when doesnt create a place', async () => {
      const place = TestUtil.guiveMeAPlace();
      mockRepository.create.mockReturnValue(null);

      await service.createPlace(place).catch((e) => {
        expect(e).toBeInstanceOf(Error);
        expect(e).toMatchObject({
          message: 'country and place cant be duplicated',
        });
      });
      expect(mockRepository.create).toBeCalledTimes(1);
      expect(mockRepository.save).toBeCalledTimes(1);
    });
  });

  describe('findAllPlaces', () => {
    it('should show all places', async () => {
      const place = TestUtil.guiveMeAPlace();
      mockRepository.find.mockReturnValue([place, place]);
      const places = await service.findAllPlaces();
      expect(places).toHaveLength(2);
      expect(mockRepository.find).toHaveBeenCalledTimes(1);
    });
  });

  describe('updatedPlace', () => {
    it('should update a place', async () => {
      const place = TestUtil.guiveMeAPlace();
      const data = { pais: 'Updated Country', meta: '12/12' };

      const updatedPlace = {
        ...place,
        ...data,
      };

      service.updatePlace(place.id, updatedPlace);
      expect(updatedPlace).toMatchObject(data);
    });
  });

  describe('deletePlace', () => {
    it('should delete a place', async () => {
      const place = TestUtil.guiveMeAPlace();
      mockRepository.delete.mockReturnValue(place);
      mockRepository.find.mockReturnValue(place);

      const deletedPlace = await service.deletePlace('1');

      expect(deletedPlace).toBe(true);
      expect(mockRepository.delete).toBeCalledTimes(1);
    });
    it('should not delete a place', async () => {
      const place = TestUtil.guiveMeAPlace();
      mockRepository.delete.mockReturnValue(place);
      mockRepository.find.mockReturnValue(place);

      await service.deletePlace('1').catch((e) => {
        expect(e).toBeInstanceOf(Error);
      });

      expect(mockRepository.delete).toBeCalledTimes(1);
    });
  });
});
