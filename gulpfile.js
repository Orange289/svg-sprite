'use strict';

var gulp = require('gulp'),
    svgstore = require('gulp-svgstore'),
    rename = require('gulp-rename');

var path = {
    build: { //Тут мы укажем куда складывать готовые после сборки файлы
  	   sprite: 'img/'
    },
    src: {
      svg: 'img/sprite_svg/*.svg'
    }
}

gulp.task('svgsprite', function() {
	return gulp.src(path.src.svg)
		.pipe(svgstore({
			inlineSvg: true
		}))
		.pipe(rename('sprite.svg'))
		.pipe(gulp.dest(path.build.sprite));
});
