test('Verdadero', () => {
  expect(true).toBeTruthy();
});

const text = 'Hola Mundo';
test('Debe contener Mundo', () => {
  expect(text).toMatch(/Mundo/);
});

const fruits = ['fresa', 'mango', 'kiwi'];
test('¿Tenemos mango?', () => {
  expect(fruits).toContain('mango');
});
