const http = require("http");

const port = 8081; // local port num

http
  .createServer((req, res) => { // call back func
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>hey server started n u can procced :-) 123456 </h2>");
    res.end();
  })
  .listen(port, () => { // call back func
    console.log(`NodeJs Server Started Running on Port: ${port}`);
  });

// http://localhost:8081
