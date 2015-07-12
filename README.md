## Requirements
You need a recent version of Node installed. Other than that, NPM should take care of everything for you.


## Installation

After you clone the repo with git, install all dependencies with:

`npm install`


##Operation
We need a server for this app. Use any you like, but if you don't have a preference, you can get a ultra-simple Node HTTP server with:

`npm install -g httpster`

We need to launch the auto-compiler for our Browserified JS:

`gulp` 

Then, launch a web server to let us see our compiled work in-browser. The files we want to serve are in /dist:

`cd dist`

Launch the web server we just installed with:

`httpster` 