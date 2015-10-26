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
                tasks: ['run_XP_firefox_37', 'run_Windows7_chrome_40']
            }
        }
    });

    // load tasks
    grunt.loadNpmTasks('grunt-mocha-parallel');
    grunt.loadNpmTasks('grunt-parallel');

    grunt.registerTask('XP_firefox_37', function(n) {
      grunt.option('browser', 'firefox');
      grunt.option('version', 37);
      grunt.option('platform', "XP");
    });

    grunt.registerTask('Windows7_chrome_40', function(n) {
      grunt.option('browser', 'chrome');
      grunt.option('version', 40);
      grunt.option('platform', "Windows 7");
    });

    // register tasks
    grunt.registerTask('default', ['parallel']);

    grunt.registerTask('run_XP_firefox_37', ['XP_firefox_37', 'mocha_parallel']);
    grunt.registerTask('run_Windows7_chrome_40', ['Windows7_chrome_40', 'mocha_parallel']);
};
