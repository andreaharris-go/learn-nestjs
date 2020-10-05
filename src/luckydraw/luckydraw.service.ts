import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository, DeleteResult } from 'typeorm';
import { LuckydrawEntity } from './luckydraw.entity';

import {LuckydrawRO, LuckydrawsRO} from './luckydraw.interface';

@Injectable()
export class LuckydrawService {
  constructor(
    @InjectRepository(LuckydrawEntity)
    private readonly luckydrawRepository: Repository<LuckydrawEntity>
  ) {}

  async findAll(query): Promise<LuckydrawsRO> {

    const qb = await getRepository(LuckydrawEntity).createQueryBuilder('luckydraw')

    qb.orderBy('luckydraw.created', 'DESC');

    const luckydrawsCount = await qb.getCount();

    if ('limit' in query) {
      qb.limit(query.limit);
    }

    if ('offset' in query) {
      qb.offset(query.offset);
    }

    const luckydraws = await qb.getMany();

    return {luckydraws, luckydrawsCount};
  }

  async findOne(where): Promise<LuckydrawRO> {
    const luckydraw = await this.luckydrawRepository.findOne(where);
    return { luckydraw };
  }

  async createLuckydraw(LuckydrawData): Promise<LuckydrawRO> {
    return await this.luckydrawRepository.save(LuckydrawData.body);
  }
}
