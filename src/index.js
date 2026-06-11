import 'dotenv/config'
import app from './app.js'
import connectDB from './db/index.js'

const PORT = process.env.PORT ?? 8080

connectDB()
    .then(
        app.listen(PORT, () => {
            console.log("App is running in port ", PORT)
        })
    )
    .catch((err) => {
        console.error("Mongo DB connection error", err)
        process.exit(1)
    }
    )
