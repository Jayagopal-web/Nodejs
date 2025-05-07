# Learning Notes

This is for my learning notes.

## How to Create and Run Your Own Command (package.json)

1. Add a custom command inside the `scripts` section of `package.json`:
   ```json
   "start-server": "node app.js"

2. Run the command using:
    ```bash
    $ npm run start-server

You need to include the word run between npm and your custom command name (start-server) to execute your own script.


## How to install 3rd Party Packages

1. To add an entry to the "dependencies" attribute of a package.json file, on the command line, run the following command:

    ```bash
    $ npm install <package-name> --save-prod

    
2. To add an entry to the "devDependencies" attribute of a package.json file, on the command line, run the following command:

    ```bash
    npm install <package-name> --save-dev