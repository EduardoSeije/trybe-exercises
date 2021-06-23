// Exercício 01

const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

test(`Teste da função uppercase`, (done) => {
  uppercase('test', (str) => {
    expect(str).toBe('TEST');
    done();
  });
});

// Exercício 02 e 03

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
  };
  
  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        };
  
        return reject({ error: 'User with ' + id + ' not found.' });
    });
  };
  
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  };

  describe('Testando a função getUserName', () => {
    test('Retorne o usuário', () => {
      expect.assertions(1);
      return getUserName(4).then((id) => expect(id).toEqual('Mark'))
    });
  });

  describe('Testando a função getUserName', () => {
    test('Retorne um erro', () => {
      expect.assertions(1);
      return getUserName(1).catch(error => expect(error).toEqual({ error: 'User with 1 not found.'}))
    });
  });

  describe('Testando a função getUserName async', () => {
    it('Retorna o usuário', async () => {
      expect.assertions(1);
      const user = await getUserName(4);
      expect(user).toEqual('Mark');
    })
  });

  describe('Testando a função getUserName async', () => {
    it('Retorna erro', async () => {
      expect.assertions(1);
      try {
        await getUserName(1);
      } catch (error) {
        expect(error).toEqual({ error: 'User with 1 not found.'});
      }
    })
  })

  // Exercício 04
  const fetch = require('node-fetch');
const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

describe('Teste repositório', () => {
  it('Retorna repositório', async () => {
    return getRepos('https://api.github.com/orgs/tryber/repos')
    .then(result => {
      expect(result).toContain('sd-01-week4-5-project-todo-list');
      expect(result).toContain('sd-01-week4-5-project-meme-generator');
    });
  });
});

// Exercício 05
/* 1 - beforeEach -> 1- test -> 1 - afterEach
2 - beforeEach -> 2 - test -> 2 afterEach */;

beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

// Exercício 06 

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    const animal = Animals.find((animal) => animal.name === name);
    if (animal) {
      return resolve(animal);
    }
    const error = 'Nenhum animal com esse nome!'
    return reject(error);
  })
);

const getAnimal = (name) => {
  return findAnimalByName(name)
  .then(animal => animal);
};
// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});