import { useMutation, useQueryClient } from 'react-query';
import { DeadlineService } from '../../../services/deadline.service';

export default function useSetDeadlines() {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(DeadlineService.addDeadline, {
    onSuccess: () => queryClient.invalidateQueries('deadlines'),
  });

  return { setDeadlines: mutateAsync };
}
