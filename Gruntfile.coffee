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
      test_post_processors:
        options:
          postProcessors:
            "**/*.txt": "default"
            "**/*.wav": "arraybuffer"
            "**/*.json": "json"
            "**/*": "base64"
        files:
          "test/actual/test_post_processors.js": "test/fixtures/test_post_processors/*"
      test_folders_and_wildcards:
        files:
          "test/actual/test_folders_and_wildcards.js": "test/fixtures/test_folders_and_wildcards/**/*"
    nodeunit:
      tests: ["test/*_test.js"]

  grunt.registerTask("test", ["fixtures2js", "nodeunit"])
