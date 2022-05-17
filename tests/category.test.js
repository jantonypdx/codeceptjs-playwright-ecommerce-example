const assert = require('node:assert');

Feature('Category');

Scenario(`can add product to cart`, async ({ I, search, category, cart }) => {
  I.amOnPage('/');
  await search.search('dress');
  await category.addProductToCart('random');

  const expectedQuantity = 1;
  const cartQuanity = await cart.getQuantity();
  assert.equal(
    cartQuanity,
    expectedQuantity,
    `Expected ${expectedQuantity}, but found ${cartQuanity} products in Cart`
  );
});
