var elixir = require('laravel-elixir');

elixir(function(mix) {
    // Compile all sass
    mix.sass('app.scss');

    // Copy JS libraries into resources
    mix.copy('node_modules/jquery/dist/jquery.min.js', 'resources/assets/js/1jquery.js')
       .copy('node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js', 'resources/assets/js/2bootstrap.js')
       .copy('node_modules/vue/dist/vue.min.js', 'resources/assets/js/3vue.js')
       .scriptsIn('resources/assets/js', 'public/js/vendor.min.js');

});
