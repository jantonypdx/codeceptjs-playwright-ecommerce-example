const { I } = inject();
const { getElementIndex } = require('../lib/utility');

module.exports = {
  // locators
  pageBody: {
    css: [
      'body#category',
      'body#search'
      //
    ].join(',')
  },

  productItems: {
    css: 'ul.product_list > li'
  },

  proceedToCheckoutButton: {
    css: 'a[title="Proceed to checkout"] > span'
  },

  // ------------------------------------------------------

  /**
   * Get the number of visible products found on page
   * @returns integer count
   */
  async productCount() {
    let count = 0;

    // make sure we're on category or search result page
    await I.waitForElement(this.pageBody, 10);

    // look for products on the page
    await I.waitForElement(this.productItems, 10);

    let visibleProductCount = await I.grabNumberOfVisibleElements(
      this.productItems
    );

    if (visibleProductCount && visibleProductCount >= 0) {
      count = visibleProductCount;
    }

    return count;
  },

  /**
   * Add a product to cart (where product is either an integer or the string 'random')
   * @param {int or string} choice
   */
  async addProductToCart(choice) {
    // make sure we're on category or search result page
    await I.waitForElement(this.pageBody, 10);

    // look for products on the page
    await I.waitForElement(this.productItems, 10);
    let visibleProductCount = await I.grabNumberOfVisibleElements(
      this.productItems
    );

    const productIndex = getElementIndex(visibleProductCount, choice, true);
    const productElement = `${this.productItems.css}:nth-of-type(${productIndex})`;

    // hover over product
    await I.hover(productElement);

    // click product's add to cart button
    const addToCartButton = locate(productElement).find(
      'a.ajax_add_to_cart_button > span'
    );
    await I.click(addToCartButton);

    // go to checkout
    await I.waitForElement(this.proceedToCheckoutButton, 10);
    await I.click(this.proceedToCheckoutButton);
  }
};
