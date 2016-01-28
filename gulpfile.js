var elixir = require('laravel-elixir');

elixir(function(mix) {
    // Compile all sass
    mix.sass('app.scss');

    // Copy font libraries into public
    mix.copy('node_modules/uikit/dist/fonts', 'public/fonts');

    // Copy and compile vendor libraries
    mix.copy('node_modules/jquery/dist/jquery.js', 'resources/assets/js/vendor/jquery.js')
       .copy('node_modules/select2/dist/js/select2.full.js', 'resources/assets/js/vendor/select2.full.js')
       .copy('node_modules/uikit/dist/js/uikit.js', 'resources/assets/js/vendor/uikit.js')
       .copy('node_modules/uikit/vendor/codemirror/codemirror.js', 'resources/assets/js/vendor/codemirror.js')
       .copy('node_modules/uikit/vendor/highlight/highlight.js', 'resources/assets/js/vendor/highlight.js')
       .copy('node_modules/uikit/vendor/commonmark.js', 'resources/assets/js/vendor/commonmark.js')
       .copy('node_modules/uikit/vendor/marked.js', 'resources/assets/js/vendor/marked.js')
       .copy('node_modules/uikit/vendor/holder.js', 'resources/assets/js/vendor/holder.js')
       .scriptsIn('resources/assets/js/vendor', 'public/js/vendor.min.js');

    // Compile UIKIT component JS
    mix.scripts([
        'accordion.js',
        'autocomplete.js',
        'datepicker.js',
        'form-password.js',
        'form-select.js',
        'htmleditor.js',
        'grid.js',
        'notify.js',
        'parallax.js',
        'search.js',
        'slider.js',
        'slideshow.js',
        'sticky.js',
        'tooltip.js',
        'upload.js'
    ], 'public/js/uikit-components.min.js', 'node_modules/uikit/src/js/components'); // output, baseDir

    // Run Browserify on scripts.
    mix.browserify('app.js');
});
