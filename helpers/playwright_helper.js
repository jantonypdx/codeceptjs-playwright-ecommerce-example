/* eslint-disable class-methods-use-this */
const Helper = require('@codeceptjs/helper');

class PlaywrightHelper extends Helper {
  /**
   * Hover over element matching selector
   * @param {object} element
   * @param {object} options
   */
  async hover(element, options = {}) {
    const { page } = this.helpers.Playwright;
    await page.hover(element, options);
  }
}

module.exports = PlaywrightHelper;
