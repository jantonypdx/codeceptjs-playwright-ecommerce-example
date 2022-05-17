const assert = require('node:assert');

Feature('Header');

Scenario(`expected elements present`, async ({ I, header }) => {
  I.amOnPage('/');

  // test if valid phone number
  const phoneNumber = await header.getPhoneNumber();
  assert.equal(phoneNumber.length, 10, `found ${phoneNumber} in Header`);

  // test if valid contact URL
  const contactUrl = await header.getContactUrl();
  assert.ok(
    contactUrl.includes('controller=contact'),
    `found Contact URL: ${contactUrl} in Header`
  );

  // test if valid Sign In URL
  const signInUrl = await header.getSignInUrl();
  assert.ok(
    signInUrl.includes('controller=my-account'),
    `found Sign In URL: ${signInUrl} in Header`
  );
});
