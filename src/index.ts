import express from "express"
import cors from "cors"
import prisma from "../db"
const app = express()
const port = 3000

//initialize express app
app.use(cors())//cross origin resource sharing middleware, to allow requests from other domains
app.use(express.json())//json parser to js object
app.use(express.urlencoded({ extended: true })) //urlencoded parser to js object

app.get("/", (req, res) => {
//   const body =  JSON.parse(req.body)
  res.send("Hello World!")
})

app.post("/api/v1/ad", async(req, res) => {
  const {title, startAt, endAt, conditions} = req.body
  // const {ageStart, ageEnd,country,platform} = conditions
  await prisma.ad.create({
    data: {
      title,
      startAt,
      endAt,
      conditions: {
        create: conditions
      }
    }
  })
  res.send("Ad created")
})
app.get("/api/v1/ad", (req, res) => {
    const {offset, limit, age, gender, country, platform} = req.query
    
    res.send("Ad created")
})

app.listen(port, () => { 
    console.log(`Server is running at http://localhost:${port}`)
})
