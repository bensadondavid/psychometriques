import assert from 'node:assert/strict';
import test from 'node:test';

import { parseBulkSelection } from '../lib/admin/catalogue-bulk-selection.ts';

function selection(overrides = {}) {
  const form = new FormData();
  const values = { tab: 'questions', operation: 'review', scope: 'selected', exam: 'amirnet', status: 'DRAFT', q: '', content: 'all', ...overrides };
  for (const [key, value] of Object.entries(values)) form.set(key, value);
  return form;
}

test('une page entière de 100 questions peut être sélectionnée', () => {
  const form = selection();
  for (let index = 0; index < 100; index++) form.append('ids', `question-${index}`);
  assert.equal(parseBulkSelection(form)?.ids.length, 100);
  form.append('ids', 'question-100');
  assert.equal(parseBulkSelection(form), null);
});

test('la sélection globale exige un examen explicite', () => {
  assert.equal(parseBulkSelection(selection({ scope: 'filtered', exam: '' })), null);
  assert.equal(parseBulkSelection(selection({ scope: 'filtered', exam: 'yaelnet' }))?.exam, 'yaelnet');
});

test('refuse un statut ou une opération inconnus', () => {
  assert.equal(parseBulkSelection(selection({ scope: 'filtered', operation: 'delete' })), null);
  assert.equal(parseBulkSelection(selection({ scope: 'filtered', status: 'UNKNOWN' })), null);
  assert.equal(parseBulkSelection(selection({ scope: 'filtered', operation: 'review_publish' }))?.operation, 'review_publish');
});

test('la sélection globale garde le filtre des questions liées', () => {
  assert.equal(parseBulkSelection(selection({ scope: 'filtered', content: 'figure' }))?.content, 'figure');
  assert.equal(parseBulkSelection(selection({ scope: 'filtered', content: 'text_or_figure' }))?.content, 'text_or_figure');
  assert.equal(parseBulkSelection(selection({ scope: 'filtered', content: 'invalid' })), null);
});
