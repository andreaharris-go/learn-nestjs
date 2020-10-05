import { LuckydrawEntity } from './luckydraw.entity';

interface LuckydrawData {
  mobile: string;
  code: string;
}

export interface LuckydrawRO {
  luckydraw: LuckydrawEntity;
}

export interface LuckydrawsRO {
  luckydraws: LuckydrawEntity[];
  luckydrawsCount: number;
}

