#!/usr/bin/env node
var chalk   = require('chalk'),
    request = require('request'),
    opts    = require('nomnom').parse(),
    arg     = opts[0];

// We need to have a URL to deref, so let's show the usage info and quit
if (!arg) {
    console.log('Usage: ' + chalk.yellow('deref "http://t.co/something"'));
    process.exit(1);
}

var derefQuery = {
    method: 'POST',
    uri:    'http://deref.link/deref', 
    body:   {"url": arg},
    json:   true
};

var handleResponse = function (error, response, body) {
    if (!error && response.statusCode === 200) {
        var length = body.route_log.length;
        console.log(
            'Found ' + chalk.yellow(length) + (length == 1 ? ' hop: ' : ' hops:')
        );
        for(var i = 0; i < length; i++) {
            console.log(
                (i + 1).toString() + ': ' + 
                ((i + 1 == length)
                    ? chalk.green(body.route_log[i]) 
                    : chalk.yellow(body.route_log[i])).toString()
            );
        }
        
        return body;
    } 

    console.log(chalk.red(
        'An error occurred. Response code was ' + 
        (response ? response.statusCode : 'not returned') + '.'
    ));

    return false;
};

result = request(derefQuery, handleResponse);
