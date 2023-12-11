import { useMutation, useQueryClient } from 'react-query';
import { FirestoreService } from '../../../services/firestore.service';

export default function useSetDeadlines() {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(FirestoreService.addDeadline, { onSuccess: () => queryClient.invalidateQueries('deadlines') });

  return { setDeadlines: mutateAsync };
}
