# ** Ionic 3 - Firebase Auth + RealtimeDatabase With Angularfire v5 **

Este projeto possui a finalidade de demonstrar o funcionamento de um app hibrido com ionic 3, utilizando funcionalidades de autenticação e noSQL para banco em tempo real com o firebase.

## Preparação do Ambiente

* **Ionic 3**
    - http://ionicframework.com/getting-started/

* **Cordova 6 ou superior**
    - https://cordova.apache.org/#getstarted

* **Node 6 ou superior**
    - https://nodejs.org/en/download/


## Instalação de dependências

Após clonar o projeto do repositório execute os seguintes procedimentos:

* npm install -g cordova ionic
* npm install
* npm install firebase angularfire2 rxjs @ultimate/ngxerrors --save

Após isso, você já pode executar o projeto web via:
* ionic serve

Ou continuar o fluxo para utilizar como app hibrido:

* ionic cordova platform add android 
* ionic cordova platform add ios
* cordova clean
* ionic cordova prepare android
* ionic cordova prepare ios
* ionic cordova run android
* ionic cordova run ios

