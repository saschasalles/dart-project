import { Test, TestingModule } from '@nestjs/testing';
import { GamePlayerService } from './game-player.service';

describe('GamePlayerService', () => {
  let service: GamePlayerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GamePlayerService],
    }).compile();

    service = module.get<GamePlayerService>(GamePlayerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
