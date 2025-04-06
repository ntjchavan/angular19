import { CustomStyleDirective } from './custom-style.directive';

describe('CustomStyleDirective', () => {
  it('should create an instance', () => {
    const directive = new CustomStyleDirective(null as any, null as any);
    expect(directive).toBeTruthy();
  });
});
