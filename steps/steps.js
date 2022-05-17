/* eslint-disable no-undef */
const { I, search, category, cart, header } = inject();
const assert = require('node:assert');

// state object to capture state between steps (if needed)
// let state = {};

// ************************************
// Setup
// ************************************

// Before(async (test) => {
//   test.retries(2);
//   state = {};
//   state.property = someFunction();
// });

// ************************************
// Page Objects
// ************************************

// Home
Given('I am on the home page', async () => {
  await I.amOnPage('/');
});

// Search
Given('I search for {string}', async (term) => {
  await search.search(term);
});

// Category
Given('I add product {string} to cart', async (choice) => {
  await category.addProductToCart(choice);
});

Given('I should see products returned', async () => {
  const productCount = await category.productCount();
  assert.notEqual(
    productCount,
    0,
    `found ${productCount} products after search`
  );
});

// Cart
Given('I should see {int} product(s) in cart', async (quantity) => {
  const cartQuanity = await cart.getQuantity();
  assert.equal(
    cartQuanity,
    quantity,
    `Expected ${quantity}, but found ${cartQuanity} product(s) in Cart`
  );
  await I.wait(5);
});

// Header
Given('I should see a valid Phone Number', async () => {
  // test if valid phone number
  const expectedPhoneNumberLength = 10;
  const phoneNumber = await header.getPhoneNumber();
  assert.equal(
    phoneNumber.length,
    expectedPhoneNumberLength,
    `Expected phone number length '${expectedPhoneNumberLength}' in Header, ` +
      `but found phone number: '${phoneNumber}'`
  );
});

Given('I should see a valid Contact Us link', async () => {
  // test if valid contact URL
  const expectedContactUrl = 'controller=contact';
  const contactUrl = await header.getContactUrl();
  assert.ok(
    contactUrl.includes(expectedContactUrl),
    `Expected substring '${expectedContactUrl}' in Contact URL in Header, but found URL: '${contactUrl}'`
  );
});

Given('I should see a valid Sign In link', async () => {
  // test if valid Sign In URL
  const expectedSignInUrl = 'controller=my-account';
  const signInUrl = await header.getSignInUrl();
  assert.ok(
    signInUrl.includes(expectedSignInUrl),
    `Expected substring '${expectedSignInUrl}' in SignIn URL in Header, but found URL: '${signInUrl}'`
  );
});
