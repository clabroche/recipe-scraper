const cheerio = require('cheerio')
module.exports = {
  "selectors": [
    {
      "title": "name",
      "value": ".main-title",
      "text": true
    },
    {
      "title": "img",
      "value": ".af-pin-it-wrapper img",
      "attr": "src"
    },
    {
      "title": "nbPerson",
      "value": ".recipe-ingredients__qt-counter input",
      "attr": "value",
      "transform": value => +value
    },
    {
      "title": "time",
      "value": ".recipe-infos__total-time__value",
      "text": true
    },
    {
      "title": "preparation",
      "value": ".recipe-preparation__list__item",
      "text": true,
      html: value => {
        return value.toArray()
          .map(($preparation, i) => {
            $preparation = cheerio.load(cheerio.html($preparation))
            $preparation('h3').remove()
            return `<h3>Etape ${i + 1}</h3>\n<p>${$preparation('.recipe-preparation__list__item').text().trim()}</p>`
          }).join('\n')
      }
    },
    {
      "title": "ingredients",
      "value": ".recipe-ingredients__list__item",
      "children": [
        {
          "title": "quantity",
          "value": ".recipe-ingredient-qt",
          "text": true
        },
        {
          "title": "name",
          "value": ".ingredient",
          "text": true
        }
      ]
    }
  ]
}
