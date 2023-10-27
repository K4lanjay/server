const http = require("http")
const url = require("url")

const myServer = http.createServer((req, res) => {
    const myUrl = url.parse(req.url, true) /* to parse the url of request */ 
    console.log(myUrl);
    res.end(`Hey ${myUrl.query.name} here is your search result for ${myUrl.query.question}`)
})

/* to listen request made to server at a port */

myServer.listen(3001, (err) => {
    if (err) 
        console.log("error occured")
     else
        console.log("server started")
})