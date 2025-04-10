import { Test, TestingModule } from '@nestjs/testing';
import { CalificacionesController } from './calificaciones.controller';
import { CalificacionesService } from './calificaciones.service';

describe('CalificacionesController', () => {
  let controller: CalificacionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalificacionesController],
      providers: [CalificacionesService],
    }).compile();

    controller = module.get<CalificacionesController>(CalificacionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
