const assert = require('node:assert');

Feature('Header');

Scenario(`expected elements present`, async ({ I, header }) => {
  I.amOnPage('/');

  // test if valid phone number
  const expectedPhoneNumberLength = 10;
  const phoneNumber = await header.getPhoneNumber();
  assert.equal(
    phoneNumber.length,
    expectedPhoneNumberLength,
    `Expected phone number length '${expectedPhoneNumberLength}' in Header, ` +
      `but found phone number: '${phoneNumber}'`
  );

  // test if valid contact URL
  const expectedContactUrl = 'controller=contact';
  const contactUrl = await header.getContactUrl();
  assert.ok(
    contactUrl.includes(expectedContactUrl),
    `Expected substring '${expectedContactUrl}' in Contact URL in Header, but found URL: '${contactUrl}'`
  );

  // test if valid Sign In URL
  const expectedSignInUrl = 'controller=my-account';
  const signInUrl = await header.getSignInUrl();
  assert.ok(
    signInUrl.includes(expectedSignInUrl),
    `Expected substring '${expectedSignInUrl}' in SignIn URL in Header, but found URL: '${signInUrl}'`
  );
});
