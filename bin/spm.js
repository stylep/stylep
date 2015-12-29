#! /usr/bin/env node

var yargs = require("yargs");
var shell = require("shelljs");
var userArgs = process.argv.slice(3);

if (process.argv.length < 3) {
        console.log('spm: missing argument');
        console.log();
        process.exit(1);
}

for (var i = 0; i < userArgs.length; i++) {
        if (userArgs[i][0] !== "-") {
                userArgs[i] = 'stylep-' + userArgs[i];
        }
}

var searchString = userArgs.join(' ');

var argv = yargs.usage("$0 command")
        .command("install", "installs style patterns to your project", function(yargs) {
                shell.exec("npm install --save-dev " + searchString, function(err, stdout, stderr){});
        })
        .command("i", "Shorthand for install", function(yargs) {
                shell.exec("npm install --save-dev " + searchString, function(err, stdout, stderr){});
        })
        .command("uninstall", "uninstalls style patterns from your project", function(yargs) {
                shell.exec("npm uninstall --save-dev " + searchString, function(err, stdout, stderr){});
        })
        .command("un", "Shorthand for uninstall", function(yargs) {
                shell.exec("npm uninstall --save-dev " + searchString, function(err, stdout, stderr){});
        })
        .command("list", "lists out all installed style patterns in your project", function(yargs) {
                shell.exec("npm list --depth=0 2>/dev/null | grep stylep", function(err, stdout, stderr){});
        })
        .command("ls", "Shorthand for ls", function(yargs) {
                shell.exec("npm list --depth=0 2>/dev/null | grep stylep", function(err, stdout, stderr){});
        })
        .help("h")
        .alias("h", "help")
        .argv;

