# Descrição
O material foi desenvolvido com intenção de aprendizado, porém, segue de maneira utilitária e funcional. Foi utilizado módulos como chalk e fs para construção da biblioteca, além da API fetch.
## Script
É possivel executar a biblioteca no terminal (estando no diretório do projeto), utilizando:
```
npm run cli ./path
```
Onde path é o caminho relativo ao diretório da biblioteca.  
Ao adicionar "-- --valida" ao final da chamada no terminal, irá ser feita uma requisição ao servidor direcionado pelos links e retornado o status, como a seguir:
```
npm run cli ./path -- --valida
```

Os seguintes códigos para teste são:

```
npm run clitest
```
![image](https://github.com/Lucas-Cornelius/cli-return-links/assets/163306474/e1f356db-9666-4a6b-b80f-7e1a9403284d)
```
npm run clitest:valida
```
![image](https://github.com/Lucas-Cornelius/cli-return-links/assets/163306474/b80958e6-efd7-40a0-b55e-b7a938ffc8c5)
