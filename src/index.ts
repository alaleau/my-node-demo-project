import express, { Express, Request, Response } from 'express'

const app: Express = express()
app.get('/health', (req: Request, res: Response) => {
  res.status(200).send('Server is healthy')
})

const port = 3000
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
