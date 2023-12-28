interface Deadline {
  userId: string;
  title: string;

  date: Date;

  singleOccurrence: boolean;
  occurrences?: number;

  subject?: string;
  description?: string;
}
