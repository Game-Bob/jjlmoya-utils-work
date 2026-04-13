import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import { workCategory } from '../data';

describe('Tool Validation Suite', () => {
  describe('Library Registration', () => {
    it('should have 10 tools in ALL_TOOLS', () => {
      expect(ALL_TOOLS.length).toBe(10);
    });

    it('workCategory should be defined', () => {
      expect(workCategory).toBeDefined();
      expect(workCategory.i18n).toBeDefined();
    });
  });
});

