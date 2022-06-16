import svgSprite from "gulp-svg-sprite";

export const getSvgSprite = () => {
    return app.gulp.src(app.path.src.svgicons, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SVG",
                message: "Error: <%= error.message %>"
            })
        ))
        // Before running this code
        // create assets/img/svg/icons folder
        .pipe(svgSprite({
            mode: {
                symbol: {
                    //Sprite path
                    sprite: `../svg/sprite/sprite.svg`,
                }
            },
        }))
        .pipe(app.gulp.dest(`${app.path.srcFolder}/assets/img/`))
        // Create svg/icons/mono folder
        .pipe(app.gulp.src(`${app.path.srcFolder}/assets/img/svg/icons/mono/*.svg`))
        .pipe(svgSprite({
            mode: {
                symbol: {
                    //Sprite path
                    sprite: `../svg/sprite/spriteMono.svg`,
                }
            },
            shape: {
                transform: [{
                    svgo: {
                        plugins: [{
                            removeAttrs: {
                                // Removes fill attrs
                                attrs: ['fill', 'path:fill']
                            },
                        }]
                    }
                }]
            }
        }))
        .pipe(app.gulp.dest(`${app.path.srcFolder}/assets/img/`))
}