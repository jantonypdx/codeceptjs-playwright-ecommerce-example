const assert = require('node:assert');

Feature('Category');

Scenario(`can add product to cart`, async ({ I, search, category, cart }) => {
  I.amOnPage('/');
  await search.search('dress');
  await category.addProductToCart('random');

  const expectedQuantity = 1;
  const cartQuantity = await cart.getQuantity();
  assert.equal(
    cartQuantity,
    expectedQuantity,
    `Expected ${expectedQuantity}, but found ${cartQuantity} products in Cart`
  );
});
