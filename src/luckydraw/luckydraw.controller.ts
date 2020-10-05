import {Get, Post, Body, Put, Delete, Query, Param, Controller} from '@nestjs/common';
import { Request } from 'express';
import { LuckydrawService } from './luckydraw.service';
import { CreateLuckydrawDto } from './dto';
import { LuckydrawsRO, LuckydrawRO } from './luckydraw.interface';

import {
  ApiBearerAuth,
  ApiResponse,
  ApiOperation, ApiTags,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('luckydraw')
@Controller('luckdraw')
export class LuckydrawController {

  constructor(private readonly luckydrawService: LuckydrawService) {}

  @ApiOperation({ summary: 'Get all luckydraws' })
  @ApiResponse({ status: 200, description: 'Return all luckydraws.'})
  @Get()
  async findAll(@Query() query): Promise<LuckydrawsRO> {
    return await this.luckydrawService.findAll(query);
  }

  @ApiOperation({ summary: 'Create luckydraw' })
  @ApiResponse({ status: 201, description: 'The luckydraw has been successfully created.'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post()
  async createLuckydraw(@Body('comment') luckydrawData: CreateLuckydrawDto) {
    return await this.luckydrawService.createLuckydraw(luckydrawData);
  }
}