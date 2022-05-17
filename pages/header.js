const { I } = inject();

module.exports = {
  // locators
  phoneNumber: {
    css: 'span.shop-phone'
  },
  contactUsLink: {
    css: 'div#contact-link > a'
  },
  signInLink: {
    css: 'a.login'
  },

  // ------------------------------------------------------

  /**
   * Get header Phone Number
   * @returns string
   */
  async getPhoneNumber() {
    let number = '';
    await I.waitForElement(this.phoneNumber, 10);
    let foundNumber = ((await I.grabTextFrom(this.phoneNumber)) || '').replace(
      /\D/g,
      ''
    );
    if (foundNumber.length > 0) {
      number = foundNumber;
    }

    return number;
  },

  /**
   * Get header Contact URL
   * @returns string
   */
  async getContactUrl() {
    let url = '';
    await I.waitForElement(this.contactUsLink, 10);
    let foundUrl = await I.grabAttributeFrom(this.contactUsLink, 'href');

    if (foundUrl && foundUrl.length > 0) {
      url = foundUrl;
    }

    return url;
  },

  /**
   * Get header Sign In URL
   * @returns string
   */
  async getSignInUrl() {
    let url = '';
    await I.waitForElement(this.signInLink, 10);
    let foundUrl = await I.grabAttributeFrom(this.signInLink, 'href');

    if (foundUrl && foundUrl.length > 0) {
      url = foundUrl;
    }

    return url;
  }
};
