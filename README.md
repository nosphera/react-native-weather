# builders-weather
Este projeto tem por objetivo apurar a localização atual do dispositivo e consultar os dados climáticos da região

<h2>Screens</h2>
<table>
  <tr>
    <td><img src="https://github.com/nosphera/builders-weather/blob/main/screenshots/01.jpeg" /></td>
    <td><img src="https://github.com/nosphera/builders-weather/blob/main/screenshots/02.jpeg" /></td>
    <td><img src="https://github.com/nosphera/builders-weather/blob/main/screenshots/03.jpeg" /></td>
    <td><img src="https://github.com/nosphera/builders-weather/blob/main/screenshots/04.jpeg" /></td>
    <td><img src="https://github.com/nosphera/builders-weather/blob/main/screenshots/05.jpeg" /></td>
  </tr>
</table>
# Pre-requisitos para rodar:

Os dados climáticos são obtidos a partir da api [OpenWeather](https://openweathermap.org/api), para compilar o aplicativo é necessário obter uma Api Key no site.

Os dados e Geocode e Geolocalização são obtidos atraves das apis de serviço do [Google Cloud](https://cloud.google.com/docs), é necessário obter uma Api Key com acesso a estes serviços

Ambas as Keys são definidas no arquivo ``` .env ``` na raiz do projeto.

## Node / NPM
Instale o NodeJs em sua máquina, após execute o comando (em um terminal ou prompt de comando) "npm i -g npm" para atualizar o gerenciador de pacotes npm;

## react-native-cli
Instale a interface de linha de comando do react-native: "npm i -g react-native-cli"

## Android SDK 26 (para rodar no android):
Certifique-se que você possui o SDK do android instalado, com o build tools acima da versão 26. O Emulador do Android é instalado juntamente, mas precisa ser ativado através do "Androi Virtual Device Mannager" (AVD Mannager). Você pode utilizar outro emulador, como o Genymotion se preferir.

## Baixe os Fontes
Baixe os fontes ou clone o repositório em um local conhecido, com permissão de escrita e que você tenha acesso a ele

## NPM Install
Abra um terminal (terminal, powershell, prompt de comando, atraves do VS Code ....) e navegue até o diretório onde voce efetuou o download dos fontes. Após isso execute o comando "npm install" e aguarde a finalização do processo.

## Conecte o celular ou Inicie o emulador
Abra o emulador de sua preferência e aguarde o processo de inicialização. Certifique-se que o seu computador detectou o aparelho e que este está com a depuração USB, e a permissão para instalar aplicativos de fonte externa ativadas. No android, para verificar se o aparelho ou emulador foi detectado digite no terminal "adb devices", e serão listados na tela os dispositivos conectados (tanto emulador como físicos) - NÃO CONECTE MAIS DE UM DEVICE AO MESMO TEMPO

# Execute a aplicação
No Terminal aberto, navegue até o diretório onde estão os fontes e execute "react-native run-android".