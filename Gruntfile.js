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
  });

  grunt.registerTask('serve', ['connect:server','watch']);
};
