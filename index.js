const fs = require('fs');
const http = require('http');
const url = require('url');

///////////////////////////
////        FILES       ///


//Blocking, synchronus way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');

// console.log(textIn);

// const textOut = `This is what we know about Lorem Ipsum: ${textIn}. \n Created on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('Files Written');

//Non-Blocking Asynchronus Way
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//     if (err) return console.log('ERROR! 💣');

//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//         fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
//             console.log(data3);

//             fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//                 console.log('Your File has been Written🙋');
//             })
//         });
//     });
// });
// console.log('Will Read file!');

////////////////////////////////////////////

///////         SERVER          ///////////

const server = http.createServer((req, res) => {
  //  console.log(req.url);
  const pathName = req.url;
  if(pathName === '/' || pathName === '/overview') {
      res.end('This is the OVERVIEW');
  }else if (pathName === 'product') {
    res.end('This is the PRODUCT')
  } else {
      res.writeHead(404, {
          'Content-type':'text/html',
          'my-own-header':'hello-world'
      });
      res.end('<h1>Page not found!</h1>');
  }
    res.end('Hello from the Server!');
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
})
