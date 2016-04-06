module.exports = function(grunt) {
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt); // load 3rd party tasks

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      dist: {
        files: [{
          expand: true,
          cwd: 'dev',
          src: ['**'],
          dest: 'dist/'
        }]
      }, // dist
      html: {
        files: [{
          expand: true,
          cwd: 'dev',
          src: ['css/**', 'js/**', 'images/**'],
          dest: 'html/'
        }]
      }
    }, //copy

    // remove all files from folder xxx
    clean: {
      dist: ['dist'],
      html: ['html']
    },

    php2html: {
      default: {
        options: {
          // Task-specific options go here.
          // relative links should be renamed from .php to .html
          processLinks: true,
          htmlhint: {
            'tagname-lowercase': true,
            'attr-lowercase': true,
            'attr-value-double-quotes': true,
            'doctype-first': true,
            'tag-pair': true,
            'spec-char-escape': true,
            'id-unique': true,
            'src-not-empty': true
          }, // htmlhint
          docroot: 'dev'
        }, // options
        files: [{
          expand: true,
          cwd: 'dev/',
          src: ['*.php'],
          dest: 'html',
          ext: '.html'
        }]
      } // default
    }, // php2html

    validation: {
      options: {
        reset: grunt.option('reset') || false,
        stoponerror: false
      },
      files: {
        src: ['html/*.html']
      }
    }, // validation

    analyzecss: {
      prod: {
        sources: ['./source/css/style.css']
      },
      options: {
        outputMetrics: 'error',
        softFail: false,
        thresholds: {
          selectors: 4096, // Limit des IE

          // diese Checks werden nicht durchlaufen
          redundantBodySelectors: null,
          comments: null,
          commentsLength: null,
          complexSelectors: null,
          complexSelectorsByAttribute: null,
          duplicatedSelectors: null,
          emptyRules: null,
          expressions: null,
          oldIEFixes: null,
          importants: null,
          mediaQueries: null,
          oldPropertyPrefixes: null,
          qualifiedSelectors: null,
          specificityIdAvg: null,
          specificityIdTotal: null,
          specificityClassAvg: null,
          specificityClassTotal: null,
          specificityTagAvg: null,
          specificityTagTotal: null,
          selectorsByAttribute: null,
          selectorsByClass: null,
          selectorsById: null,
          selectorsByPseudo: null,
          selectorsByTag: null,
          universalSelectors: null,
          length: null,
          rules: null,
          declarations: null
        }
      }
    } // analyzecss

  }); // grunt.initConfig

  grunt.registerTask('dist', ['clean:dist', 'copy:dist', 'replace:dist']);
  grunt.registerTask('html', ['clean:html', 'php2html', 'copy:html']);
  // grunt.registerTask('html', ['clean:html', 'php2html', 'copy:html', 'validation']);

};
