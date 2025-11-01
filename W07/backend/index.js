// For testing api, you can use Postman, Thunder Client, or Postcode.

// npm install express
// npm install cors
import express from 'express'
import cors from 'cors'

import postsRoutes from './routes/posts.routes.js'
import authorsRoutes from './routes/authors.routes.js'

const app = express()
const PORT = 3000

app.use(cors()) // Enable CORS for all routes.
app.use(express.json()) // Parse JSON request bodies.

// Define routes.
app.use('/posts', postsRoutes)
app.use('/authors', authorsRoutes)

// Handle undefined routes.
app.all(/.*/, (req, res) => res.status(404).json({ error: 'Endpoint not found.' }))

// Start the server.
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}.`))

/* CONNECT TO DATABASE */

// npm install mongoose
import mongoose from 'mongoose'

const PASSWORD = encodeURIComponent('Greenwich@123') // Replace with your actual password.
const URI = `mongodb+srv://tester:${PASSWORD}@cluster0.d7o5uji.mongodb.net/?appName=Cluster0` // Replace the connection string as needed for your MongoDB setup.

mongoose.set('strictQuery', true)
mongoose.connect(URI, { dbName: 'Web_02' }) // Replace 'Web_02' with your database name.
    .then(() => console.log('Connected to MongoDB.'))
    .catch(err => console.error('Error connecting to MongoDB:', err))