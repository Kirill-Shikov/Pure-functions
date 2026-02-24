import { getHealthStatus } from './healthIndicator';

describe('getHealthStatus', () => {
  test('возвращает "healthy" для здоровья > 50', () => {
    expect(getHealthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
    expect(getHealthStatus({ name: 'Воин', health: 51 })).toBe('healthy');
  });

  test('возвращает "wounded" для здоровья от 15 до 50 включительно', () => {
    expect(getHealthStatus({ name: 'Лучник', health: 50 })).toBe('wounded');
    expect(getHealthStatus({ name: 'Целитель', health: 30 })).toBe('wounded');
    expect(getHealthStatus({ name: 'Монах', health: 15 })).toBe('wounded');
  });

  test('возвращает "critical" для здоровья < 15', () => {
    expect(getHealthStatus({ name: 'Разбойник', health: 14 })).toBe('critical');
    expect(getHealthStatus({ name: 'Некромант', health: 0 })).toBe('critical');
    expect(getHealthStatus({ name: 'Призрак', health: -10 })).toBe('critical');
  });
});