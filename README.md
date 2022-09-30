
# Yokohama

Venha conhecer Yokohama, um aplicativo para você se comunicar com seu amor. 


<p align="center">
  <img src="https://github.com/WebTrusteds/Yokohama/blob/master/img/banner.png" alt="banner.png"/>
</p>

<p  dir="auto">
        <a href="/">
          <img alt="GitHub Repo stars" align="left"  src="https://img.shields.io/github/stars/WebTrusteds/Yokohama?color=%23162026&label=Stars&logoColor=%23162026&style=for-the-badge">
          </a>
          <a href="#">
                <img alt="GitHub watchers" align="right"  src="https://img.shields.io/github/watchers/WebTrusteds/Yokohama?color=%23162026&label=Visitors&logoColor=%23162026&style=for-the-badge">
            </a>
</p>

<br />


## Índice
* [Funções](#funções)
* [Capturas de Tela](#capturas-de-tela)
* [Frameworks e Blibliotecas utilizadas](#frameworks-e-blibliotecas-utilizadas)
* [Configurando e Rodando o projeto](#configurando-e-rodando-o-projeto)

## Funções
Esse projeto conta com diversas funções, podemos apresenta-las em categorias:

#### Tela de início:
Conta com as funções de Entrar com Conta, Criar Conta, e Recuperar Senha.

#### Dashboard:
Como tela de navegação temos uma dashboard, ela possui compontentes chamados <Navigation>, o qual foram designados para comprir a função de redirecionar para as telas secundarias, apresentadas logo a baixo.

#### Textos:
A tela de Textos, foi designada para o usuário poder criar sessões de textos, e assim poder armazenar textos importantes do casal, como por exemplo temos textos para apoiar em dias tristes, quando um do cônjuge não estiver disponível.

#### Galeria:
A galeria, tem como funções exibir e adicionar imagens, nela podemos adicionar imagens ver em lista com o componente baseado em FlatList e assim podemos abri-los e ter eles em tela cheia.

#### Flertes:
A tela de Flertes, foi designada para o usuário poder criar sessões de Flertes, e assim poder compartilhar entre si flertes e cantadas para ver no momento e futuramente relembra-las como um momento especial do casal.

#### Músicas:
A tela de Músicas, foi designada para o usuário poder criar sessões com letras de músicas, e assim poder compartilhar músicas romanticas com seu parcero e assim compartilhando da mesma vibe.


## Capturas de Tela

<table>
   <tr>
      <tr>
       <td><img src="https://github.com/WebTrusteds/Yokohama/blob/master/img/Screenshot_1664482240.png" alt="3" width="100%"></td>
       <td><img src="https://github.com/WebTrusteds/Yokohama/blob/master/img/Screenshot_1664482247.png" align="right" width="100%"></td>
       <td><img src="https://github.com/WebTrusteds/Yokohama/blob/master/img/Screenshot_1664482250.png" alt="3" width="100%"></td>
       <td><img src="https://github.com/WebTrusteds/Yokohama/blob/master/img/Screenshot_1664482261.png" align="right" width="100%"></td>
      </tr>
      <tr>
       <td><img src="https://github.com/WebTrusteds/Yokohama/blob/master/img/Screenshot_1664482268.png" alt="3" width="100%"></td>
       <td><img src="https://github.com/WebTrusteds/Yokohama/blob/master/img/Screenshot_1664484524.png" align="right" width="100%"></td>
       <td><img src="https://github.com/WebTrusteds/Yokohama/blob/master/img/Screenshot_1664484531.png" alt="3" width="100%"></td>
       <td><img src="https://github.com/WebTrusteds/Yokohama/blob/master/img/Screenshot_1664484535.png" align="right" width="100%"></td>
      </tr>
        <tr>
       <td><img src="https://github.com/WebTrusteds/Yokohama/blob/master/img/Screenshot_1664484545.png" alt="3" width="100%"></td>
       <td><img src="https://github.com/WebTrusteds/Yokohama/blob/master/img/Screenshot_1664484547.png" align="right" width="100%"></td>
          <td><img src="https://github.com/WebTrusteds/Yokohama/blob/master/img/Screenshot_1664484555.png" align="right" width="100%"></td>
      </tr>
  </tr>
</table>

## Frameworks e Blibliotecas utilizadas

| Framework | Link |
| --- | --- |
| React Native | https://reactnative.dev

| Bliblioteca | Link |
| --- | --- |
| Firebase Native | https://rnfirebase.io
| Async Storage | https://github.com/react-native-async-storage/async-storage
| React Navigation | https://reactnavigation.org
| Image Picker | https://github.com/react-native-image-picker/react-native-image-picker
| Push Notification | https://github.com/zo0r/react-native-push-notification
| Vector Icons | https://github.com/oblador/react-native-vector-icons
| Styled Components | https://styled-components.com/docs/basics

## Configurando e Rodando o projeto

#### Configurando o Firebase:
* 1° Crie uma aplicação no <a href="https://console.firebase.google.com">firebase</a>.
* 2° Habilite a Autentificação.
* 3° Habilite as database e mude as rules para `allow read, write: if request.auth != null;`.
* 4° Crie uma aplicação para sua plataforma tanto como Android ou Ios, importe os services como demonstrado no tutorial do firebase apresentado.
* 5° Siga os passos abaixo para rodar o projeto.

#### Yarn Scripts:
* `yarn install` para instalar todas as dependencias.
* `yarn react-native run-android` ou `yarn react-native run-ios` para rodar no seu celular.


