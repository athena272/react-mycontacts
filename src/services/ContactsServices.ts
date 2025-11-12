import type { Contacts, OrderBy } from '../pages/Home';
import delay from '../utils/delay';

class ContactsServices {
    async listContacts(orderBy: OrderBy = 'asc'): Promise<Contacts[]> {
        const response = await fetch(`http://localhost:3000/contacts?orderBy=${orderBy}`);

        await delay(2 * 1000);
        return response.json();
    }
}

export default new ContactsServices();
