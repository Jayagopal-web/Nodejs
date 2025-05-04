const fs = require('fs');

const requestHandler = (req,res)=>{
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter Form Details</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><input type="submit" value="Send"></form></body>');
        res.write('</html>');
        return res.end();    
    }
    
    if (url === '/message' && method == "POST") {
        
        const body = [];
        req.on('data',(chunk)=>{            
            body.push(chunk);
            console.log(chunk);
        })
    
        return req.on('end',()=>{
            console.log("End event received");
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=');
            fs.writeFile("hello.txt", message[1],()=>{
                console.log("File completed");
                res.setHeader('Location', '/');
                res.statusCode = 302;
                return res.end();
            });
        })
    }
    
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Node Server</title></head>');
    res.write('<body><h1>Response form Node Server!</h1></body>');
    res.write('</html>');
    res.end();
};

// module.exports = {
//     handler:requestHandler, 
//     someText:'Printing some text'
// };

/* --- Node js method to export --- */
// exports.handler = requestHandler;
// exports.someText = 'Print some text';

/* --- JS method to export --- */
module.exports.handler = requestHandler;
module.exports.someText = 'JS method to Export';