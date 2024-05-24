const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return src("styles/application.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("css")); 
}

function watchFiles() {
  watch("styles/**/*.scss", buildStyles);
}
function buildTest() {
  return src("styles/test.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("css"));
}

exports.build = buildTest;
exports.default = buildTest;
exports.build = buildStyles;
exports.watch = watchFiles;
exports.default = series(buildStyles, watchFiles);
