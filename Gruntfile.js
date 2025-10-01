module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Copy files task
    copy: {
      main: {
        expand: true,
        cwd: '.',                // current directory
        src: [
          '*.html',
          '*.css',
          '*.js',
          'Portfolio/**'         // include Portfolio folder
        ],
        dest: 'dist/',           // output directory
      }
    },

    // Clean dist folder before build
    clean: {
      build: ['dist/']
    }
  });

  // Load required plugins
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task: clean then copy
  grunt.registerTask('default', ['clean', 'copy']);
};
