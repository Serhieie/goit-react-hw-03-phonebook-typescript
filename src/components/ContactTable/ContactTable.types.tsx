import { Contact } from '../ContactTableItem/ContactTableItem.types';

export interface ContactTableProps {
  getVisibleContacts: Contact[];
  onDeleteContact: (id: string) => void;
}
