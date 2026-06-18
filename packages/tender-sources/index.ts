export interface TenderSearchParams {
  keywords?: string[];
  regions?: string[];
  minPrice?: number;
  maxPrice?: number;
}

export interface RawTender {
  source: string;
  externalId: string;
  title: string;
  description?: string;
  customerName?: string;
  price?: number;
  url?: string;
  deadlineDate?: Date;
}

export interface TenderSource {
  name: string;
  search(params: TenderSearchParams): Promise<RawTender[]>;
}

export class ManualTenderSource implements TenderSource {
  name = 'manual';

  async search(params: TenderSearchParams): Promise<RawTender[]> {
    // In a real application, this might process CSV/JSON uploads
    return [];
  }
}
