'use strict';
module.exports = function(grunt){
  grunt.loadNpmTasks('grunt-contrib-watch');
      grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.initConfig({
    watch: {
      src: {
        files: ['*.html','*.css'],
        options: {
          livereload:true
        }
      }
    },
    connect: {
      server: {
        options: {
          port:1234,
          base:'.'
        }
      }
    }
  });

  grunt.registerTask('serve', ['connect:server','watch']);
};
