![MyGulp](https://lh3.googleusercontent.com/3V4c-TqJGEJI1aHL7rnXUb4TJDU2Lp0zl2TBSYq2PZ6LzUJ_ar-lAmTGtNZx5Vi6qAoWia7mPA8zIQ09MHnhwLeRIBgy4MXtcdc_Od6lO-XqP6-ou-Jk9sWTsSLKsQRvPJ7TWgpZ7GsAg7i1AJLrdkOqve7e1IH62dfzi3_7Ppj7NfUtVyq3XJfE2t3FXqagipvdTIbcex_SVdoWeSyQlMYpMAHPCXC6arkYgqi7TQfTsbdkDCje62FNB0BEzGUtRhJ7hF59iKvYbiT_LcSEx29npyVDqHPnp4pZ3fkngNJ_Lws3IJxEAzt9t-g8icZVjWqBdGv5URQloo-SjTo92fQWvoWvVuXZdab1uUYdeOdiokhsZajo8c7wi8X9dnG30ck06vr_UOrE1HBS9HebtbUDAgByX4X0y8mHd17kxBmAAZ3O8HZtaYpW5u-7Ho-uc6pPvFkH8gMigVkchJiFy5-5hcFByn_cpF1_tQZz2BG77wtMjVXmUO3pdAJ7OEsTqhh7OrKdZRZfSaTL7InoBYhk5zUdhzLUv3saTL8G1jD7PwZ8xntAwox4e5mqaDUP2NWHPivy7djflwREJu1JJJg81e3VxHX6nGCma37Jv4gtnY4xaKDoXHe3yVojOo4nCHC7q1hT9X1YkzaCNs-5g5Gmt8kvEMVlrYlWPSSWZ1pehMFOYL6ChyVy8yH5nudDu8-qQ8DBGDOKGsfVh-hDpgFg94ezdbJYnOQL_hqokDS6G2sPFLMTnV2F69Hx7aG0dLVy03A28Uud-LE0WU-R-OMZN-AEqeGmJ50F-1gGXivEMuKHk7KvCCeUCI_RFI-KNGzX5MFHfUNDMmc45gz05rEDUsvE8Q-8-YYI=w830-h125-no?authuser=0)

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