import { useQuery } from 'react-query';

import { FirestoreService } from '../../../services/firestore.service';

export default function useDeadlines() {
  const { data, isLoading } = useQuery(['deadlines'], FirestoreService.getDeadlines);
  return { deadlines: data, isLoading };
}
