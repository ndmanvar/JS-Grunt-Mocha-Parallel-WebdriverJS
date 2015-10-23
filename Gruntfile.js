'use strict';

var path = require('path');

module.exports = function (grunt) {

    require('time-grunt')(grunt);

    // configure tasks
    grunt.initConfig({

        mocha_parallel: {
            options: {
                args: function(suiteName) {
                    return [];
                },
                env: function(suiteName) {
                    return process.env;
                },
                report: function(suite, code, stdout, stderr) {
                },
                done: function(success, results) {
                },
                mocha: './node_modules/.bin/mocha',
                concurrency: '10'
            }
        }

    });

    // load tasks
    grunt.loadNpmTasks('grunt-mocha-parallel');

    // register tasks
    grunt.registerTask('default', ['mocha_parallel']);
};
