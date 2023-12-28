import { useQuery } from 'react-query';

import { DeadlineService } from '../../../services/deadline.service';

export default function useDeadlines() {
  const { data, isLoading, isError } = useQuery(['deadlines'], DeadlineService.getDeadlines);
  return { deadlines: data, isLoading, isError };
}
