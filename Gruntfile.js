/*jshint node: true */

'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: [
        'Gruntfile.js',
        'jquery.xortable.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    }
    // uglify: {
    //   options: {
    //     banner: '/*! <%= pkg.name %> v<%= pkg.version %> | <%= pkg.license %> */\n'
    //   },
    //   build: {
    //     src: 'jquery.cookie.js',
    //     dest: 'build/jquery.cookie-<%= pkg.version %>.min.js'
    //   }
    // }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['jshint']);
  // grunt.registerTask('ci', ['default']);
};