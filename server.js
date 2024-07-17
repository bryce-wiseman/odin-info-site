import http from 'http'
import url from 'url'
import fs from 'fs/promises'
import path from 'path';
const PORT = 8080;

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log(__filename)
console.log(__dirname)


const server = http.createServer(async(req, res) => {
    let filepath;
    if (req.url === '/') {
        filepath = path.join(__dirname, 'index.html')
    } else if (req.url === '/about') {
        filepath = path.join(__dirname, 'about.html')
    } else if (req.url === '/contact') {
        filepath = path.join(__dirname, 'contact-me.html')
    } else if (req.url === '/style.css') {
        filepath = path.join(__dirname, 'style.css')
    } else {
        filepath = path.join(__dirname, '404.html')
    }
        
    
    let data = await fs.readFile(filepath)
    res.setHeader('Content-Type', 'text/html')
    res.write(data) 
    res.end()
})

server.listen(PORT, () => {
    console.log(`server is live on ${PORT}`)
})