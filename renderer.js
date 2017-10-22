function log (content) {
  const elem = document.getElementsByTagName('h1').item(0)
  elem.textContent = content
}

const superagent = require('superagent')

function superagentRequest () {
  return new Promise((resolve, reject) => {
    superagent
      .get('https://www.google.com')
      .end((err, res) => {
        if (err) {
          reject(err)
        } else {
          resolve(res)
        }
      })
  })
}

async function main () {
  try {
    for (let i = 0; i < 10000; ++i) {
      await superagentRequest()
      log(i)
    }
  } catch (err) {
    log(JSON.stringify(err, Object.getOwnPropertyNames(err)))
  }
}

main()
