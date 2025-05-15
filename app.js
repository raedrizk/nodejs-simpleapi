const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express ();
const fs = require('fs');
const path = require('path');

function getAppVersion() {
  const packageJsonPath = path.join(__dirname, 'package.json');

  try {
    const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf-8');
    const packageJson = JSON.parse(packageJsonContent);
    return packageJson.version;
  } catch (error) {
    console.error('Error reading or parsing package.json:', error);
    return 'Version not found';
  }
}

app.use(express.json());

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

app.get("/status", (request, response) => {
   const status = {
      "Status": "Running",
      "Port": PORT,
      "Version": getAppVersion()
   };
   
   response.send(status);
});

app.get("/handsome", (request, response) => {
   const status = {
      "name": "Raed Soliman",
      "Title": "CCO/LC - Chief Cheese-burger Officer and Lord Commander",
      "Phone Number": "(xxx) xxx-xxxx",
   };
   
   response.send(status);
});

app.get("/smart", (request, response) => {

   response.redirect('/handsome');

});

app.get("/intelligent", (request, response) => {

   response.redirect('/handsome');

});

app.get("/beautiful", (request, response) => {

   response.redirect('/handsome');

});