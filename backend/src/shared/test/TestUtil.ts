import { PlaceEntity } from '../../places/model/place.entity';

export default class TestUtil {
  static guiveMeAPlace(): PlaceEntity {
    const place = new PlaceEntity();
    place.pais = 'Some Country';
    place.local = 'Some place in Country';
    place.meta = '11/11';
    place.url = 'Some country flag url';
    place.id = '1';

    return place;
  }
}
