const http = require("http");

const port = 8081; // local port num

// HTTP Methods

/*
>> GET: Inorder to get data from server
>> POST: Sending data to server
>> DELETE: Deleting the data from database
>> PATCH: Updating certain fields
>> PUT: Full Update
*/

const toDoList = ["learn", "apply things", "succed"];

http
  .createServer((req, res) => {
    // call back func
    const { method, url } = req;

    // console.log(method, url);

    if (url === "/todos") {
      if (method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(toDoList.toString());
      } else if (method === "POST") {
        let body = "";
        req
          .on("error", (err) => {
            console.log(err);
          })
          .on("data", (chunk) => {
            body += chunk;
            // console.log(chunk);
          })
          .on("end", () => {
            body = JSON.parse(body);

            let newToDo = toDoList;
            newToDo.push(body.devtown);
            console.log(newToDo);
            // console.log("data: ", body);
          });
      } else if (method === "DELETE") {
        let body = "";
        req
          .on("error", (err) => {
            console.error(err);
          })
          .on("data", (chunk) => {
            body += chunk;
          })
          .on("end", () => {
            body = JSON.parse(body);

            let deleteThisItem = body.item;

            for (let i = 0; i < toDoList.length; i++) {
              if (toDoList[i] === deleteThisItem) {
                toDoList.splice(i, 1);
                break;
              } else {
                console.error("Error: Match Not Found!!");
                break;
              }
            }

            // toDoList.find((elem, index) => {
            //   if (elem === deleteThisItem) {
            //     toDoList.splice(index, 1);
            //   } else {
            //     console.error("Error: Match Not Found!!");
            //     // console.exit();
            //   }
            // });
          });
      } else {
        res.writeHead(501);
      }
    } else {
      res.writeHead(404);
    }
    res.end();
    // res.writeHead(200, { "Content-Type": "text/html" });
    // res.write("<h2>hey server started n u can procced :-) 123456 </h2>");
    // res.end();
  })
  .listen(port, () => {
    // call back func
    console.log(`NodeJs Server Started Running on Port: ${port}`);
  });

// http:localhost:8081
// http:localhost:8081/

// http://localhost:8081/signin
// http://localhost:8081/signup
// http://localhost:8081/home
// http://localhost:8081/contactUs
// http://localhost:8081/AboutUs
