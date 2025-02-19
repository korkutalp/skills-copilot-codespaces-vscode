// filepath: /workspaces/skills-copilot-codespaces-vscode/test/skills.test.js
const assert = require('assert');
const { calculateNumbers } = require('../skills');

describe('calculateNumbers', function() {
    it('should return the sum of two numbers', function() {
        assert.strictEqual(calculateNumbers(2, 3), 5);
        assert.strictEqual(calculateNumbers(-1, 1), 0);
        assert.strictEqual(calculateNumbers(0, 0), 0);
    });
});