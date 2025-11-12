import type { Contacts, OrderBy } from '../pages/Home';
import HttpCllient from './utils/HttpCllient';

class ContactsServices {
    private httpClient: HttpCllient;

    constructor() {
        this.httpClient = new HttpCllient('http://localhost:3000');
    }

    async listContacts(orderBy: OrderBy = 'asc'): Promise<Contacts[]> {
        return await this.httpClient.get<Contacts[]>(`/contacts?orderBy=${orderBy}`);
    }
}

export default new ContactsServices();
