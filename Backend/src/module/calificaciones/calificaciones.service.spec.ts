import { Test, TestingModule } from '@nestjs/testing';
import { CalificacionesService } from './calificaciones.service';

describe('CalificacionesService', () => {
  let service: CalificacionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalificacionesService],
    }).compile();

    service = module.get<CalificacionesService>(CalificacionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
