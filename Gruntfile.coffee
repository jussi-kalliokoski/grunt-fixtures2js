module.exports = (grunt) ->
  grunt.loadTasks("tasks")
  grunt.loadNpmTasks("grunt-contrib-nodeunit")

  grunt.initConfig
    fixtures2js:
      test_defaults:
        files:
          "test/actual/test_defaults.js": "test/fixtures/test_defaults/*"
      test_head_tail:
        options:
          head: "foobar("
          tail: ")"
        files:
          "test/actual/test_head_tail.js": "test/fixtures/test_head_tail/*"
    nodeunit:
      tests: ["test/*_test.js"]

  grunt.registerTask("test", ["fixtures2js", "nodeunit"])
