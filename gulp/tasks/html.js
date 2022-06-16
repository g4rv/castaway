import fileInclude from "gulp-file-include";
import webpHtml from "gulp-webp-retina-html";
import versionNumber from "gulp-version-number";
import formatHtml from 'gulp-format-html';
import imgSize from 'gulp-imgsize-inline';

export const html = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "HTML",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(fileInclude())
        .pipe(app.plugins.replace(/@img\//g, 'assets/img/'))
        .pipe(app.plugins.replace(/@js\//g, 'assets/js/'))
        .pipe(app.plugins.replace(/@css\//g, 'assets/css/'))
        // Don't forget to set "src" attr
        // On build adds img sizes width and height
        .pipe(
            app.plugins.if(
                app.isBuild,
                imgSize({
                    path: `${app.path.srcFolder}/`
                })
            )
        )
        // Wraps img tag with picture and add .webp format
        .pipe(
            app.plugins.if(
                app.isBuild,
                webpHtml({
                    extensions: [
                        'jpg',
                        'jpeg',
                        'jfif',
                        'pjpeg',
                        'pjp',
                        'png',
                        'apng',
                        'gif',
                        'webp',
                        'bmp',
                        'ico',
                        'cur',
                        'tif',
                        'tiff',
                        'avif'
                    ],
                    // retina: {
                    //     1: '',
                    //     2: '@2x',
                    // }
                })
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                formatHtml({
                    indent_size: 4,
                })
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                versionNumber({
                    'value': '%DT%',
                    'append': {
                        'key': '_v',
                        'cover': 0,
                        'to': [
                            'css',
                            'js',
                        ]
                    },
                    'output': {
                        'file': 'gulp/version.json'
                    }
                })
            )
        )
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browserSync.stream());
}