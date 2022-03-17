import { Test, TestingModule } from '@nestjs/testing';
import { TypeMoneyController } from './type-money.controller';

describe('TypeMoneyController', () => {
  let controller: TypeMoneyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeMoneyController],
    }).compile();

    controller = module.get<TypeMoneyController>(TypeMoneyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
