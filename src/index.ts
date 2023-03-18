import express from 'express'
import diaryRouter from './routes/diaries'

const app = express()

app.set('port', 3000)

app.use(express.json())

app.get('/', (_req, res) => {
  res.send('Hello')
})

app.use('/api/diaries', diaryRouter)

app.listen(app.get('port'), () => console.log(`Server listening on port ${app.get('port')}`))
