import express from 'express'
const app = express()

import ssr from './ssr.js'

app.use(ssr)

app.listen(3000)
