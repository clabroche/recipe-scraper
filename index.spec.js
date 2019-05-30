const marmiton = require('./index')
const {expect} = require('chai')
const chai = require('chai')
const chaiJestDiff = require('chai-jest-diff').default

chai.use(chaiJestDiff())

describe('#getRecipeFromURL', function() {
  it('should return correct recipe', async function() {
    const recipe = await marmiton.getRecipeFromURL('https://www.marmiton.org/recettes/recette_clafoutis-aux-cerises-express_17365.aspx')
    expect(recipe).to.be.deep.equal({
      name: 'Clafoutis aux cerises express',
      img: 'https://assets.afcdn.com/recipe/20180126/77154_w420h344c1cx2808cy1872cxt0cyt0cxb5616cyb3744.jpg',
      nbPerson: 8,
      time: '55 min',
      ingredients:  [
        { quantity: '700', name: 'g de cerise' },
        { quantity: '2', name: 'oeufs' },
        { quantity: '5', name: 'cuillères de farine' },
        { quantity: '5', name: 'cuillères de sucre roux' },
        { quantity: '1/4', name: 'l de lait' },
        { quantity: '60', name: 'g de beurre' },
        { quantity: '1', name: 'pincée de sel' },
        { quantity: '1', name: 'cuillère à café d\'extrait de vanille' },
        { quantity: '1', name: 'sachet de sucre vanillé' }
      ],
      preparation: '<h3>Etape 1</h3>\n<p>Lavez et équeutez les cerises.</p>\n<h3>Etape 2</h3>\n<p>Allumez votre four à thermostat 6/7 (180/200°C). \nDans un plat à tarte, mettez le beurre puis enfournez-le.</p>\n<h3>Etape 3</h3>\n<p>Battez les oeufs en omelette, ajoutez la pincée de sel ainsi que le sucre. Mélangez bien (au fouet ou au robot). Ajoutez l\'extrait de vanille, mélangez et jetez la farine en pluie. Mélangez bien jusqu\'à obtenir un liquide épais et onctueux.</p>\n<h3>Etape 4</h3>\n<p>Sortez le beure fondu du four, ajoutez-le au liquide puis ajoutez le lait tout en remuant. Une fois mélangé, ajoutez les cerises à la préparation.</p>\n<h3>Etape 5</h3>\n<p>Avec un essuie-tout, étalez le beurre resté dans le plat pour le graisser, puis ajoutez la préparation. Ajoutez quelques noisettes de beurre par dessus.</p>\n<h3>Etape 6</h3>\n<p>Enfournez 45 mn (jusqu\'à ce que le dessus commence à bien dorer). Dès la sortie du four, saupoudrez de sucre vanillé.</p>\n<h3>Etape 7</h3>\n<p>Servez tiède.</p>' 
    })
  })
  
}) 