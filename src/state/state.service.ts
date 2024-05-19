import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { StateEntity } from './entities/state.entity';

@Injectable()
export class StateService {
  constructor(
    @InjectRepository(StateEntity)
    private readonly stateRepository: Repository<StateEntity>,
  ) {}

  async getStates(): Promise<StateEntity[]> {
    return this.stateRepository.find();
  }

  async getState(state: string): Promise<StateEntity> {
    return this.stateRepository.findOneBy({ name: state });
  }
}
