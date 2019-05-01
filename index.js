const request = require("request");

const computerId = 1; // TODO: fixme, this should be saved to a file on the machine, when the computer is added to the site.

async function main() {
  try {
    let response = await login();
    console.log('Response:', response);
    // connectToWebSocket();
  } catch (error) {
    console.log('Error:', error);
  }

}

async function login() {
  return new Promise((resolve, reject) => {
    request({
      method: 'POST',
      uri: 'http://localhost:3000/api/auth/login',
      json: true,
      body: {
        "email": "weasnerb@gmail.com",
        "password": "jKjwteA$lwSHMyeK!rwoL^3yTahV2pOsfx97Z2YqaVmc#5$3pWvUdPwAmKJ92Jy*CL*$Hqkpeuicxvs#nWOrP0NZ5g2X4^AxiaQ"
      }
    }, (error, responseObject, responseBody) => {
      if (error) {
        reject(error);
      } else {
        resolve(responseObject);
      }
    })
  })
}

async function connectToWebSocket(cookie) {
  // todo: make new Websocket and connect to websocket on backend. on Message, exec stuff, on stdout or stderr send to ws.
}

main();