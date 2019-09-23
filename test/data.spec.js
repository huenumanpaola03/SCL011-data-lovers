global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


describe('filterT', () => {

  const muestra = [
    {
      name: "Aatrox",
      tags: "",
      partype: "BloodWell"
    },
    {
      name: "Ahri",
      tags: "Mage",
      partype: "MP"
    },
    {
      name: "Yasuo",
      tags: "Fighter",
      partype: "Wind"
    }
  ]
  it('debería ser una función', () => {
    assert.equal(typeof filterT, 'function');
  });

  it('debería retornar "Yasuo"cuando se filtra type "Fighter" ', () => {
    assert.deepEqual(window.filterT(muestra, "Fighter"), [
      {
        name: "Yasuo",
        tags: "Fighter",
        partype: "Wind"
      }]);
  });
})

describe('calculatingT', () => {
  it('debería ser una función', () => {
    assert.equal(typeof calculatingT, 'function');
  })
})

describe('filterP', () => {

  const datatest = [
    {
      name: "Aatrox",
      tags: "",
      partype: "BloodWell"
    },
    {
      name: "Ahri",
      tags: "Mage",
      partype: "MP"
    },
    {
      name: "Akali",
      tags: "Assassin",
      partype: "Energy"
    }
  ]
  it('debería ser una función', () => {
    assert.equal(typeof filterP, 'function');
  });

  it('debería retornar "Akali" cuando se filtra type "Energy" ', () => {
    assert.deepEqual(window.filterP(datatest, "Energy"), [
      {
        name: "Akali",
        tags: "Assassin",
        partype: "Energy"
      }
    ]);
  });
})

describe('calculatingP', () => {
  it('debería ser una función', () => {
    assert.equal(typeof calculatingP, 'function');
  })
})



describe('sortName', () => {

  const sortNametest = [
    {
      name: "Aatrox",
      tags: "",
      partype: "BloodWell"
    },
    {
      name: "Janna",
      tags: "Support",
      partype: "MP"
    },
    {
      name: "Zed",
      tags: "Assassin",
      partype: "Energy"
    }
  ]
  it('debería ser una función', () => {
    assert.equal(typeof sortName, 'function');
  });

  it('debería retornar los personajes ordenados de la A a la Z', () => {
    assert.deepEqual(window.sortName(sortNametest, "A-Z"), [
      {
        name: "Aatrox",
        tags: "",
        partype: "BloodWell"
      },
      {
        name: "Janna",
        tags: "Support",
        partype: "MP"
      },
      {
        name: "Zed",
        tags: "Assassin",
        partype: "Energy"
      }
    ]);
  });

  it('debería retornar los personajes ordenados de la Z a la A', () => {
    assert.deepEqual(window.sortName(sortNametest, "Z-A"), [
      {
        name: "Aatrox",
        tags: "",
        partype: "BloodWell"
      },
      {
        name: "Janna",
        partype: "MP",
        tags: "Support"
      },
      {
        name: "Zed",
        tags: "Assassin",
        partype: "Energy"

      }
    ]);
  });
})
