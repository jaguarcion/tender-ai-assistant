export interface AIAnalysisResult {
  summary: string;
  whatToDeliver: string;
  customer: string;
  requirements: string[];
  risks: string[];
  documentsNeeded: string[];
  fitScore: number;
  recommendation: 'worth_participating' | 'consider' | 'doubtful' | 'not_suitable';
  recommendationText: string;
}

export interface AIProvider {
  analyzeTender(tenderData: any, profileData: any): Promise<AIAnalysisResult>;
}

export class MockAIProvider implements AIProvider {
  async analyzeTender(tenderData: any, profileData: any): Promise<AIAnalysisResult> {
    return {
      summary: 'Пример анализа закупки...',
      whatToDeliver: 'Лицензии ПО',
      customer: tenderData.customerName || 'Неизвестный заказчик',
      requirements: ['Наличие лицензий', 'Срок поставки 10 дней'],
      risks: ['Короткий срок поставки'],
      documentsNeeded: ['Коммерческое предложение'],
      fitScore: 85,
      recommendation: 'worth_participating',
      recommendationText: 'Хорошая закупка для участия.',
    };
  }
}
