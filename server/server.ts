import express from 'express'
import path from 'path'
const app: express.Express = express()
const PORT = process.env.PORT || 8080
const DIST_DIR = path.join(__dirname,'../dist')
const HTML_FILE = path.join(DIST_DIR,'index.html')

type User = {
  id: number
  name: string
  email:string
}
const users: User[] = [
  { id: 1, name: "User1", email: "user1@test.local" },
  { id: 2, name: "User2", email: "user2@test.local" },
  { id: 3, name: "User3", email: "user3@test.local" }
]


app
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(express.static(DIST_DIR))
  .use((_req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header("Access-Controle-Allow-Origin", "*");
    res.header("Access-Controle-Allow-Methoxds", "*");
    res.header("Access-Controle-Allow-Headers", "*");
    next()
  })

  .get('*', (_req: express.Request, res: express.Response) => {
    res.sendFile(HTML_FILE)
  })

  .get('/api', (_req: express.Request, res: express.Response) => {
    res.send(JSON.stringify(users))
  })

  .listen(PORT, () => {
    console.log(` \x1b[36m
      ╭──────────────────────────────────────────────╮
      │                                              │
      │                                              │
      │            http:/localhost:${PORT}              │
      │            ${new Date().toLocaleString()}                │
      │                                              │
      ╰──────────────────────────────────────────────╯
      \x1b[0m`);
  })