import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      Hero.fromObject({ id: 11, name: 'Mr. Nice' }),
      Hero.fromObject({ id: 12, name: 'Narco' }),
      Hero.fromObject({ id: 13, name: 'Bombasto' }),
      Hero.fromObject({ id: 14, name: 'Celeritas' }),
      Hero.fromObject({ id: 15, name: 'Magneta' }),
      Hero.fromObject({ id: 16, name: 'RubberMan' }),
      Hero.fromObject({ id: 17, name: 'Dynama' }),
      Hero.fromObject({ id: 18, name: 'Dr IQ' }),
      Hero.fromObject({ id: 19, name: 'Magma' }),
      Hero.fromObject({ id: 20, name: 'Tornado' })
    ];
    return { heroes };
  }
}
