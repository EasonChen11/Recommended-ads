import express from "express"
import cors from "cors"

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

app.post("/api/v1/ad", (req, res) => {
   console.log(req.body)
   console.log(req.query)
   res.send("Ad created")
})
app.get("/api/v1/ad", (req, res) => {
    console.log(req.query)
    const {offset, limit, age, gender, country, platform} = req.query
    console.log(offset, limit, age, gender, country, platform)
    res.send("Ad created")
 })

app.listen(port, () => { 
    console.log(`Server is running at http://localhost:${port}`)
})

