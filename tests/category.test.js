const assert = require('node:assert');

Feature('Category');

Scenario(`can add product to cart`, async ({ I, search, category, cart }) => {
  I.amOnPage('/');
  await search.search('dress');
  await category.addProductToCart('random');

  const cartQuanity = await cart.getQuantity();
  assert.equal(cartQuanity, 1, `found ${cartQuanity} products in Cart`);
});
