const http = require("http");
const fs = require("fs");
const parseArgs = require("minimist");

let homeContent = "";
let projectContent = "";
let registrationContent = "";

fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  homeContent = home;
});

fs.readFile("project.html", (err, project) => {
  if (err) {
    throw err;
  }
  projectContent = project;
});

fs.readFile("registration.html", (err, registration) => {
  if (err) {
    throw err;
  }
  registrationContent = registration;
});

const args = parseArgs(process.argv.slice(2));
const port = args.port || 3000;

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });

    switch (request.url) {
      case "/project":
        response.write(projectContent);
        break;
      case "/registration":
        response.write(registrationContent);
        break;
      default:
        response.write(homeContent);
        break;
    }
    response.end();
  })
  .listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
