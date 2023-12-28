import { AxiosService } from './axios.service';

export class DeadlineService {
  static async getDeadlines() {
    return AxiosService.get<Deadline[]>('/deadlines', {
      fallback: [],
      errorMessage: 'Failed to get deadlines',
    });
  }

  static async addDeadline(deadline: Deadline) {
    return AxiosService.post<Deadline>('/deadlines', {
      data: deadline,
      errorMessage: 'Failed to add deadline',
    });
  }
}
