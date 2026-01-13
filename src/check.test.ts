const frameworks: string[] = ['React', 'Vue', 'Angular', 'Svelte'];

// Test arrays
test('It should has React', () => {
  expect(frameworks).toContain('React');
});

// Test numbers
test('It should be greater than', () => {
  expect(10).toBeGreaterThan(9);
});

// Test Booleans
test('It should be true', () => {
  expect(true).toBeTruthy();
});

// Reverse strings function
const reverseString = (str: string, cb: (reversed: string) => void): void => {
  cb(str.split('').reverse().join(''));
};

// Test callbacks
test('The callback should return a reversed word', () => {
  reverseString('Platzi', (str) => {
    expect(str).toBe('iztalP');
  });
});

const reverseString2 = (str: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error('No string'));
    }
    resolve(str.split('').reverse().join(''));
  });
};

test('Test a promise', () => {
  return reverseString2('Hola').then((str) => {
    expect(str).toBe('aloH');
  });
});

test('Test async/await', async () => {
  const string = await reverseString2('Hola');
  expect(string).toBe('aloH');
});

// afterEach(() => {
//   console.log('After Each test');
// });
// afterAll(() => {
//   console.log('After ALL test');
// });
// beforeEach(() => {
//   console.log('Before each Test');
// });
// beforeAll(() => {
//   console.log('Before ALL Test');
// });

const animals: string[] = [
  '🐶',
  '🐱',
  '🐭',
  '🐹',
  '🐰',
  '🐻',
  '🐼',
  '🐨',
  '🐯',
  '🦁',
  '🐮',
  '🐷',
];

const randomAnimal = (): string => {
  const animal = animals[Math.floor(Math.random() * animals.length)];
  return animal;
};

describe('Probar funcionalidades de randomAnimals', () => {
  test('Probar la funcionalidad', () => {
    expect(typeof randomAnimal()).toBe('string');
  });
  test('Probar que no existe un animal', () => {
    expect(randomAnimal()).not.toMatch(/🦓/);
  });
});

