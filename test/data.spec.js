global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


describe('filterT', () => {

  const muestra = [ 
    {
      name:"Aatrox",
      tags: "",
      partype: "BloodWell"
    },
    {
      name:"Ahri",
      tags: "Mage",
      partype: "MP"
    },
    {
      name:"Yasuo",
      tags: "Fighter",
      partype: "Wind"
    }
  ]
  it('debería ser una función', () => {
    assert.equal(typeof filterT, 'function');
  });

  it('debería retornar "Yasuo"cuando se filtra type "Fighter" ', () => {
    assert.deepEqual(window.filterT(muestra,"Fighter") ,[{name:"Yasuo",
    tags: "Fighter",
    partype: "Wind"}]);
  });
})
