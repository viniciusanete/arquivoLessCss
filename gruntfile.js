module.exports = function(grunt){
    grunt.iniConfig({
        less: {
            dist : {
                files : {
                    "index.css" : "index.less"
                }
            }
        },
        watch : {
            dist: {
                files: ["index.less"],
                tasks: ["less"]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-less");
}