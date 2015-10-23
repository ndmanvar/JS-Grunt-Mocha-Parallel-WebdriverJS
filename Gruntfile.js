'use strict';

module.exports = function (grunt) {

    // configure tasks
    grunt.initConfig({

        mocha_parallel: {
            options: {
                args: function(suiteName) {
                    return ["test/sample-spec.js"];
                },
                env: function(suiteName) {
                    return process.env;
                },
                report: function(suite, code, stdout, stderr) {
                    if (stdout.length) {
                      process.stdout.write(stdout);
                    }
                    if (stderr.length) {
                      process.stderr.write(stderr);
                    }
                },
                done: function(success, results) {
                }
                // mocha: './node_modules/.bin/mocha'
            }
        }

    });

    // load tasks
    grunt.loadNpmTasks('grunt-mocha-parallel');

    // register tasks
    grunt.registerTask('default', ['mocha_parallel']);
};
