const Scrapper = require('@iryu54/scraper')
const marmiton = {
  async getRecipeFromURL(url) {
    const html = await Scrapper.fetch(url)
    if(url.includes('marmiton')) return this.marmiton(html)
  },
  marmiton(html) {
    const config = require('./configurations/marmiton.conf')
    return Scrapper.scrap(html, config.selectors)
  }
}
module.exports = marmiton
