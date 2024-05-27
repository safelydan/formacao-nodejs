# Programação Síncrona vs Assíncrona:

## Síncrona:
- O código é executado na ordem em que é escrito.
- O fluxo de execução é bloqueado até que uma operação seja concluída.
- Pode causar atrasos significativos em operações de I/O.

## Assíncrona:
- O código não depende da ordem em que é escrito.
- As operações são executadas simultaneamente, não bloqueando o fluxo da aplicação.
- Útil para operações que podem ocorrer independentemente, como requisições de rede.

# Callbacks:
- Utilizados para lidar com operações assíncronas.
- São funções que são passadas como argumentos para outras funções e são chamadas quando uma operação é concluída.
- Comuns em Node.js para lidar com I/O.

# Promises:
- Uma promessa de que uma operação será concluída no futuro.
- Pode ser resolvida (resolve) ou rejeitada (reject).
- Úteis para lidar com múltiplas operações assíncronas.
- Evitam o callback hell, tornando o código mais legível.

# Async/Await:
- Uma forma mais simplificada de lidar com promessas.
- Utilizado para trabalhar com código assíncrono de forma mais síncrona e legível.
- O operador `await` pausa a execução do código até que a promessa seja resolvida.

# Aplicações Práticas:
- Validações Síncronas:
  - Exemplo: validação de dados antes de salvá-los no banco de dados para garantir a integridade dos dados.

- Requisições Assíncronas:
  - Exemplo: requisições de rede, leitura de arquivos, consultas a bancos de dados.

- Async/Await em Promessas:
  - Utilizado quando é necessário lidar com operações assíncronas de forma mais síncrona e legível.
