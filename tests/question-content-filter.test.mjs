import assert from 'node:assert/strict';
import test from 'node:test';

import { parseQuestionContentFilter, questionContentWhere } from '../lib/admin/question-content-filter.ts';

test('les filtres texte et figure utilisent les liens de la question', () => {
  assert.deepEqual(questionContentWhere('text'), { passageId: { not: null } });
  assert.deepEqual(questionContentWhere('figure'), { imagePath: { not: null } });
  assert.deepEqual(questionContentWhere('text_and_figure'), {
    passageId: { not: null }, imagePath: { not: null },
  });
  assert.deepEqual(questionContentWhere('none'), { passageId: null, imagePath: null });
  assert.deepEqual(questionContentWhere('text_or_figure'), { OR: [
    { passageId: { not: null } }, { imagePath: { not: null } },
  ] });
});

test('un filtre inconnu revient à tous uniquement pour la lecture', () => {
  assert.equal(parseQuestionContentFilter('invalid'), 'all');
});
