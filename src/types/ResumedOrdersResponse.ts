import { ResumedOrder } from './ResumedOrder';

export interface ResumedOrdersResonse {
  data: ResumedOrder[];
  pages_info: {
    results_per_page: number;
    total_results: number;
  };
}
