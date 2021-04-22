const operation = require('./aula');

// 01 - Faça o mock da funcão subtrair e teste sua chamada.
test('Mockando a função subtrari', () => {
  operation.subtrair = jest.fn().mockReturnValue(2);
  operation.subtrair();
  expect(operation.subtrair).toHaveBeenCalled();
  expect(operation.subtrair(5,3)).toBe(2);
 })

 // 02 - Faça o mock da função multiplicar e implemente como retorno padrão o valor '10'. Teste a chamada e o retorno.
 test('Mock da função multiplicar', () => {
   operation.somar = jest.fn().mockReturnValue(10);
   operation.somar();
   expect(operation.somar).toHaveBeenCalled();
   expect(operation.somar(5, 5)).toBe(10);
 })

 // 03 - Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.
jest.mock('./aula');
test('mock de somar implementando função de soma', () => {
  operation.somar.mockImplementation((a, b) => a + b);
  operation.somar(5, 5);
  expect(operation.somar).toHaveBeenCalled();
  expect(operation.somar(6, 5)).toBe(11);
})

// 04 - Faça o mock da função dividir e implemente um retorno padrão com o valor '15'. Implemente também os seguintes valores para a primeira e segunda chamadas: '2' e '5'. Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.
jest.mock('./aula');
test('mock de dividir implementando valor padrão de retorno', () => {
  operation.dividir = jest.fn().mockReturnValueOnce(15);
  operation.dividir.mockImplementation((a, b) => a / b);
  operation.dividir(2, 5);
  expect(operation.dividir).toHaveBeenCalled();
  expect(operation.dividir(2, 5)).toBe(0.4);
  expect(operation.dividir).toHaveBeenCalledWith(2, 5);
  expect(operation.dividir).toHaveBeenCalledTimes(2);
})

// 05 - Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor '20'. Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução.
test('mock da função subtrair sendo possível restaurar a implementação original', () => {
  const mockSub = jest.spyOn(operation, "subtrair").mockImplementation((a, b) => a + b);
  operation.subtrair = jest.fn().mockReturnValue(20);
  operation.subtrair();
  expect(operation.subtrair).toHaveBeenCalledTimes(1);
  expect(operation.subtrair).resolves.toBe(20);
  operation.subtrair.mockRestore(); 
  expect(operation.subtrair(2, 1)).resolves.toBe(1);
})