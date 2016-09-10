module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        html2js: {
            options: {
                module: 'templates-decorators'
            },
            dist: {
                src: [
                    'public/javascripts/src/templates/*.html'
                ],
                dest: 'public/javascripts/dist/_templates.js'
            }
        },

        concat: {
            dist: {
                src: ['public/javascripts/dist/_templates.js','public/javascripts/src/**/*.js'],
                dest: 'public/javascripts/build/<%= pkg.name %>-angular.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %>-angular.js <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'public/javascripts/build/<%= pkg.name %>-angular.min.js': ['<%= concat.dist.dest %>']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-html2js');

    grunt.registerTask('default', ['html2js','concat', 'uglify']);

};