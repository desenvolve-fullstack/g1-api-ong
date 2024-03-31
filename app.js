import Fastify from 'fastify'
import { healthcheckController } from './controller/healthCheckController.js'

const app = Fastify()

const PORT = 3000

app.get('/', (req, reply) => {
    reply.send('Hello world!')
})

app.get('/healthcheck', healthcheckController)

app.listen({ port: PORT}, function (err) {
    if (err) {
      app.log.error(err)
      process.exit(1)
    }
    console.log(`server listening on  port: ${PORT}`)
  })