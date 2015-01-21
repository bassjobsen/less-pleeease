# Less 2.2.0 + Pleeease 2.0.0

This is a native LESS package with [Pleeease](http://pleeease.io/docs/) postprocess support.

Pleeesse postprocess includes: autoprefixer, filters, rem, pseudoElements, opacity
import, minifier and mqpacker.
 
## Install

    meteor add bassjobsen:less-pleeease

## Configuration
You can pass custom options to `pleeease` by setting `PLEEEASE_OPTIONS` environment variable: `export PLEEEASE_OPTIONS='{ "browsers": ["Chrome 36", "iOS 7"]}'`

**Important!** When deploying to production `PLEEEASE_OPTIONS` has to be set on the machine where you bundle your project, for example if you are using your *Mac* to deploy to *Modulus.io* you must set the environment variable on you *Mac* then run `modulus deploy`, setting it on modulus website will have no effect.

To unset environment variable run: `unset PLEEEASE_OPTIONS`


If no `PLEEEASE_OPTIONS_OPTIONS` environment variable is found it fallbacks to `pleeease` default options: `["> 1%", "last 2 versions", "Firefox ESR", "Opera 12.1"]`

For more info on the `pleeease` are similair to the `autoprefixer` options please check [https://github.com/ai/autoprefixer#browsers](https://github.com/ai/autoprefixer#browsers)

###From meteor less package:

# less

[LESS](http://lesscss.org/) extends CSS with dynamic behavior such as variables, mixins,
operations and functions. It allows for more compact stylesheets and
helps reduce code duplication in CSS files.

With the `less` package installed, `.less` files in your application are
automatically compiled to CSS and the results are included in the client CSS
bundle.

If you want to `@import` a file, give it the extension `.import.less`
to prevent Meteor from processing it independently.
