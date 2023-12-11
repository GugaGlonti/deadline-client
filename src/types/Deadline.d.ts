import { Timestamp } from 'firebase/firestore';

interface Deadline {
  userId: string;
  title: string;

  date: Timestamp;

  singleOccurrence: boolean;
  occurrences?: number;

  subject?: string;
  description?: string;
}
