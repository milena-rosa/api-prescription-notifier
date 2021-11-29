import { createConnection, getConnectionOptions } from 'typeorm'

interface IOptions {
  host: string
}

getConnectionOptions().then((options) => {
  const newOptions = options as IOptions
  newOptions.host = 'database'

  createConnection({
    // ...options,
    type: 'postgres',
    url: 'postgres://flaqkxfhooanxa:76f58e01d4fd4360046898a4ce2f21e157cb7ea142528054bfb736b35b99548f@ec2-18-210-159-154.compute-1.amazonaws.com:5432/d7567ps5jrcf9k'
  })
})
