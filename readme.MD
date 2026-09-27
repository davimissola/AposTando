<a id="readme-top"></a>
<br />

<div align="center">
  <h1 align="center">AposTando</h1>

  <p align="center">
    Sistema de <strong>apostas fictícias</strong> entre Azul e Vermelho.
  </p>

  <!-- COLE AQUI A IMAGEM PRINCIPAL DO PROJETO -->

  <br />
  <br />
</div>



## Sobre o Projeto

O AposTando é uma aplicação Full Stack de apostas fictícias desenvolvida para fins de estudo. Na plataforma, os usuários podem criar uma conta, realizar login e utilizar um saldo totalmente virtual para participar de partidas.

Cada jogo permite que o usuário escolha entre dois lados: <strong>Azul</strong> ou <strong>Vermelho</strong>. Ao realizar uma aposta, o valor é descontado do saldo do usuário e contabilizado no total da partida e da opção escolhida.

Quando uma partida é iniciada, um vencedor é definido entre Azul e Vermelho. O jogo é encerrado e os usuários que apostaram na opção vencedora recebem o valor correspondente à premiação da aposta.

A aplicação possui autenticação utilizando JWT, proteção das rotas da API, armazenamento seguro das senhas através de hash e persistência dos usuários, jogos e apostas em banco de dados.

Todo o dinheiro utilizado pelo AposTando é virtual. O projeto não utiliza dinheiro real e foi desenvolvido exclusivamente para estudo e prática de desenvolvimento Full Stack.

<br /><br /><br />



### Tecnologias

#### Backend

* [![Python][Python]][Python-url]
* [![FastAPI][FastAPI]][FastAPI-url]
* [![SQLModel][SQLModel]][SQLModel-url]
* [![SQLite][SQLite]][SQLite-url]
* [![JWT][JWT]][JWT-url]
* [![React][React.js]][React-url]
* [![TypeScript][TypeScript]][TypeScript-url]
* [![CSS][CSS]][CSS-url]

<br /><br /><br />



### Funcionalidades

- **Criação de contas:** cadastro de novos usuários com nome de usuário e senha.
- **Autenticação:** login utilizando JWT para autenticar as requisições realizadas à API.
- **Senhas protegidas:** armazenamento das senhas utilizando hash.
- **Saldo virtual:** cada usuário possui um saldo utilizado exclusivamente dentro da aplicação.
- **Criação de jogos:** usuários autenticados podem criar novas partidas.
- **Visualização de jogos:** listagem das partidas que ainda estão abertas para apostas.
- **Apostas:** possibilidade de escolher entre Azul ou Vermelho e definir o valor desejado.
- **Validação de saldo:** uma aposta só pode ser realizada caso o usuário possua saldo suficiente.
- **Controle das partidas:** apostas só podem ser realizadas enquanto o jogo estiver aberto.
- **Totais por partida:** armazenamento do valor total apostado, além dos valores apostados em Azul e Vermelho.
- **Resultado da partida:** processamento do lado vencedor e encerramento do jogo.
- **Premiação:** apostas vencedoras recebem duas vezes o valor apostado em saldo virtual.
- **Animação de resultado:** interface visual alternando entre Azul e Vermelho antes de apresentar o resultado final.
- **Rotas protegidas:** funcionalidades de jogos e apostas exigem que o usuário esteja autenticado.

<p align="right"><a href="#readme-top">volte ao topo</a></p>



<!-- Imagens -->


<p align="right"><a href="#readme-top">volte ao topo</a></p>



<!-- MARKDOWN LINKS & IMAGES -->

[Python]: https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white
[Python-url]: https://www.python.org/

[FastAPI]: https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white
[FastAPI-url]: https://fastapi.tiangolo.com/

[SQLModel]: https://img.shields.io/badge/SQLModel-009688?style=for-the-badge&logo=python&logoColor=white
[SQLModel-url]: https://sqlmodel.tiangolo.com/

[SQLite]: https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white
[SQLite-url]: https://www.sqlite.org/

[JWT]: https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white
[JWT-url]: https://jwt.io/

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://react.dev/

[TypeScript]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/

[CSS]: https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white
[CSS-url]: https://developer.mozilla.org/en-US/docs/Web/CSS