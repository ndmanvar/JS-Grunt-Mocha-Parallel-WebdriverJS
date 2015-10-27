'use strict';

module.exports = function (grunt) {

    // configure tasks
    grunt.initConfig({
        mocha_parallel: {
            options: {
                args: function(suiteName) {
                    return [];
                },
                env: function(suiteName) {
                    process.env.BROWSER = grunt.option('browser');
                    process.env.VERSION = grunt.option('version');
                    process.env.PLATFORM = grunt.option('platform');
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
                },
                mocha: './node_modules/.bin/mocha'
            }
        },
        
        parallel: {
            assets: {
                options: {
                    grunt: true
                },
                tasks: ['run_windows10_edge', 'run_Windows7_ie_10']
            }
        }
    });

    // load tasks
    grunt.loadNpmTasks('grunt-mocha-parallel');
    grunt.loadNpmTasks('grunt-parallel');

    grunt.registerTask('Windows10_edge', function(n) {
      grunt.option('browser', 'microsoftedge');
      grunt.option('version', '20.10240');
      grunt.option('platform', "Windows 10");
    });

    grunt.registerTask('Windows7_ie_10', function(n) {
      grunt.option('browser', 'internet explorer');
      grunt.option('version', '10');
      grunt.option('platform', "Windows 7");
    });

    // register tasks
    grunt.registerTask('default', ['parallel']);

    grunt.registerTask('run_windows10_edge', ['Windows10_edge', 'mocha_parallel']);
    grunt.registerTask('run_Windows7_ie_10', ['Windows7_ie_10', 'mocha_parallel']);
};
