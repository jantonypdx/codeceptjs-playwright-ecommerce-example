const { I } = inject();

module.exports = {
  // locators
  searchIcon: {
    css: 'button.button-search'
  },
  searchField: {
    css: '#search_query_top'
  },

  // ------------------------------------------------------

  /**
   * Enter a search term and click search icon
   * @param {string} term
   */
  async search(term) {
    await I.waitForElement(this.searchField, 10);
    await I.fillField(this.searchField, term);
    await I.click(this.searchIcon);
  }
};
