import { Controller, Get, Param, Post } from '@nestjs/common';

import { StateEntity } from './entities/state.entity';
import { StateService } from './state.service';

@Controller('state')
export class StateController {
  constructor(private readonly userService: StateService) {}

  @Get()
  async getStates(): Promise<StateEntity[]> {
    return this.userService.getStates();
  }

  @Post('/:id')
  async getState(@Param('id') id): Promise<StateEntity> {
    return this.userService.getState(id);
  }
}
