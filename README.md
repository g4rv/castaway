![MyGulp](https://lh3.googleusercontent.com/K8b-LcFTG5qryBWnM2LSgZifrt7_wEIIr3Df8oO4dEKBQOosLeWj08A8WQBiIFjs6SoTmff9x9FrJ_71qrx5qEXHQP2ZZ16IieopDxBYIHGtVkFQmF0S87K5CbhSTymSRdPwTsmrLFAT16aRQvFUEiHWfd63CDJiHVPH7EWJY7sGplsUN3b0hElCfESZ5cTdhAZSDSZ3avUw9384kQc_7Nju0jUqBzzyLxt1y5aOtAyHkqEMIY_WxdYpEHK3LgOF7pD6rAQid8MSwo0DUPcNWVWuJInmI9rvtcfP1s3wwjEJmXg09chZgHjSc_DCnFpNpXlrOB4FDrb1_mA3paaPpJlDk53fk3qHft0IIlH-r6mOqRMH6q0YVTusRf_iHOiL6STku5cpEZbEpvFo7RsfBL9PRpUUu-ZHYVkiCXxXYVADd7RMJHTNcGlISwEuit138LquuQbzAfgzB4FEVyfRGvfq9KgDqdFkLS6eRsOg-ijD7AAL6we7camwKzDiUQl85NuV1zYX2H1TZ7WOfdJVGfbF7ojn7UUWXphxvRickbNkWnguyhyp_nRm5qZByXpxCJ7u4nAuPXC31E2Dsn9kFABp_FqHToSNEePicccR_zkmAhQ6p1P5vTlKDbX8CSiVbO-F942skaAATwhZRBmHmkwK0JgJkUGtAhpkF09pdzIvBLhh8MV_3oiEht9pHUYHizcIBh8NuxqGSnXamIw936R58qlY_6WbgAQNHV4DF2AU7pZU83J5OkBCnLkSVOvhf-e887wCQ2v77jkxAUJYKc61JsEDX-XE0d8Za6YXDG6jOBfxP-Oy9pdYCUl2b6zswgYuibcGap2p4amobqK-z_Wg-E7Gs2J52VrW=w830-h125-no?authuser=0)

> This build is based on [this][1] video. </br>
> (thx to [Yevhen](https://github.com/FreelancerLifeStyle))
___

## Default folders layout:

* __`"Project name"`__
    * __`"#src"`__
       * __`"assets"`__
            * __`"fonts"`__
            * __`"scss"`__
            * __`"js"`__
            * __`"img"`__
                * __`"svg"`__ (for svg-sprites)
                    * __`"mono"`__ (for svg-sprite with removed "fill" attr)
       * __`.html`__
    * __`"gulp"`__
    * __`"gulpfile.js"`__
    * __`"package.json"`__
___

## Comands:

* `npm run dev` __Runs developer mode__.
* `npm run build` __Runs building__.
* `npm run getSvgSprite` __Creates svg-sprite in "buildFolder" folder__.
* `npm run zip` __Adds "buildFolder".zip file__.
* `npm run ftp` __Runs ftp__.
___

## NPMs:

* __[browser-sync](https://www.npmjs.com/package/browser-sync)__
* __[del](https://www.npmjs.com/package/del)__
* __[fs](https://www.npmjs.com/package/fs)__
* __[gulp](https://www.npmjs.com/package/gulp)__
* __[gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)__
* __[gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css)__
* __[gulp-file-include](https://www.npmjs.com/package/gulp-file-include)__
* __[gulp-fonter](https://www.npmjs.com/package/gulp-fonter)__
* __[gulp-format-html](https://www.npmjs.com/package/gulp-format-html)__
* __[gulp-group-css-media-queries](https://www.npmjs.com/package/gulp-group-css-media-queries)__
* __[gulp-if](https://www.npmjs.com/package/gulp-if)__
* __[gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)__
* __[gulp-imgsize-inline](https://www.npmjs.com/package/gulp-imgsize-inline)__
* __[gulp-newer](https://www.npmjs.com/package/gulp-newer)__
* __[gulp-notify](https://www.npmjs.com/package/gulp-notify)__
* __[gulp-plumber](https://www.npmjs.com/package/gulp-plumber)__
* __[gulp-rename](https://www.npmjs.com/package/gulp-rename)__
* __[gulp-replace](https://www.npmjs.com/package/gulp-replace)__
* __[gulp-sass](https://www.npmjs.com/package/gulp-sass)__
* __[gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps)__
* __[gulp-svg-sprite](https://www.npmjs.com/package/gulp-svg-sprite)__
* __[gulp-ttf2woff2](https://www.npmjs.com/package/gulp-ttf2woff2)__
* __[gulp-util](https://www.npmjs.com/package/gulp-util)__
* __[gulp-version-number](https://www.npmjs.com/package/gulp-version-number)__
* __[gulp-webp](https://www.npmjs.com/package/gulp-webp)__
* __[gulp-webp-for-html](https://www.npmjs.com/package/gulp-webp-for-html)__
* __[gulp-webp-retina-html](https://www.npmjs.com/package/gulp-webp-retina-html)__
* __[gulp-zip](https://www.npmjs.com/package/gulp-zip)__
* __[sass](https://www.npmjs.com/package/sass)__
* __[svgo](https://www.npmjs.com/package/svgo)__
* __[vinyl-ftp](https://www.npmjs.com/package/vinyl-ftp)__
* __[webp-converter](https://www.npmjs.com/package/webp-converter)__
* __[webpack](https://www.npmjs.com/package/webpack)__
* __[webpack-stream](https://www.npmjs.com/package/webpack-stream)__
___

### To remember:

* Don't left img "src" attr empty while running "building".
* SVG sprites are made from "img/svg" and "img/svg/mono" folders
* SVG sprites are created in "buildFolder" not in "srcFolder".

[1]: https://www.youtube.com/watch?v=jU88mLuLWlk&t=3565s&ab_channel=%D0%A4%D1%80%D1%96%D0%BB%D0%B0%D0%BD%D1%81%D0%B5%D1%80%D0%BF%D0%BE%D0%B6%D0%B8%D1%82%D1%82%D1%8E