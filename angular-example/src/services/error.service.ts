import { ErrorHandler, Injectable } from '@angular/core';

export class MyErrorHandler implements ErrorHandler {
  handleError(error) {
    const message = error.toString()

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Allow-Origin", "*");
    myHeaders.append("Access-Control-Allow-Origin", "*");

    var raw = JSON.stringify({
      "@type": "MessageCard",
      "@context": "http://schema.org/extensions",
      "themeColor": "ff0000",
      "summary": "Erro (teste)",
      "sections": [
        {
          "activityTitle": "Erro",
          "facts": [
            {
              "name": "Local:",
              "value": window.location.href
            },
            {
              "name": "Mensagem:",
              "value": message
            },
            {
              "name": "Usuário:",
              "value": JSON.stringify(sessionStorage.getItem('usuario'))
            },
            {
              "name": "Data:",
              "value": new Date()
            }
          ],
          "markdown": true
        }
      ]
    });

    let mode: RequestMode = "no-cors"
    let redirect: RequestRedirect = "follow"

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      mode,
      redirect
    };

    fetch(``, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
}

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() {
    
  }
}
