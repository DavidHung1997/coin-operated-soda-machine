import { Test, TestingModule } from '@nestjs/testing';
import { TypeMoneyService } from './type-money.service';

describe('TypeMoneyService', () => {
  let service: TypeMoneyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeMoneyService],
    }).compile();

    service = module.get<TypeMoneyService>(TypeMoneyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
