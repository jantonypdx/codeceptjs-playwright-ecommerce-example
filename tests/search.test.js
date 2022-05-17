const assert = require('node:assert');

Feature('Search');

Scenario(`can search for 'dress'`, async ({ I, search, category }) => {
  I.amOnPage('/');
  await search.search('dress');
  const productCount = await category.productCount();

  assert.notEqual(
    productCount,
    0,
    `found ${productCount} products after search`
  );
});

Scenario(`can search for 'shirt'`, async ({ I, search, category }) => {
  I.amOnPage('/');
  await search.search('shirt');
  const productCount = await category.productCount();

  assert.notEqual(
    productCount,
    0,
    `found ${productCount} products after search`
  );
});
