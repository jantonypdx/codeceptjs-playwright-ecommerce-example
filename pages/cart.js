const { I } = inject();

module.exports = {
  // locators
  pageBody: {
    css: 'body#order'
  },

  quantity: {
    css: 'div.shopping_cart span.ajax_cart_quantity'
  },

  // ------------------------------------------------------

  /**
   * Get the quantity of items found in Cart
   * @returns integer
   */
  async getQuantity() {
    let quantity = 0;

    // make sure we're on category or search result page
    await I.waitForElement(this.pageBody, 10);

    // look for products on the page
    await I.waitForElement(this.quantity, 10);
    const foundQuantity = await I.grabTextFrom(this.quantity);

    if (foundQuantity && foundQuantity.length > 0) {
      quantity = parseInt(foundQuantity, 10);
    }

    return quantity;
  }
};
