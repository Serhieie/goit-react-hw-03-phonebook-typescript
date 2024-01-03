interface Contact {
  name: string;
  number: string;
}

interface ContactFormProps {
  contacts: Contact[];
  onSubmit: (name: string, number: string) => void;
}

interface ContactFormState {
  name: string;
  number: string;
}

export type { Contact, ContactFormProps, ContactFormState };
