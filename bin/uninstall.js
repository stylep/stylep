#! /usr/bin/env node
var shell = require("shelljs");
var userArgs = process.argv.slice(2);
var searchParam = userArgs[0];

var exec = require('child_process').exec;
var child = exec('npm uninstall --save-dev stylep-' + searchParam, function(err, stdout, stderr) {
        if (err) throw err;
        console.log(stdout);
});
