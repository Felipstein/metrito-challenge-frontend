import { ResumedOrder } from './ResumedOrder';

export interface ResumedOrdersResponse {
  data: ResumedOrder[];
  pages_info: {
    results_per_page: number;
    total_results: number;
  };
}
