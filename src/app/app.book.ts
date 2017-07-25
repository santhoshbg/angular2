import { InMemoryDbService } from 'angular-in-memory-web-api';

export class BookData implements InMemoryDbService {
  createDb() {
    let authDetail = [
      { username: 'admin', password: '@valtech123' }
    ];
    return {authDetail};
  }
}
