Package.describe({
	summary: "SB Admin bootstrap 3 template packaged for Meteor"
});

Package.on_use(function (api){

	api.use('jquery','client');
	api.imply('jquery', 'client');

	var path = Npm.require('path');
    var assetPath = path.join('lib/sb-admin/');

    var assetFiles = [
        assetPath + 'css/bootstrap.min.css',
        assetPath + 'css/sb-admin.css',
        assetPath + 'css/plugins/morris.css',
        assetPath + 'font-awesome-4.1.0/css/font-awesome.min.css',
        assetPath + 'font-awesome-4.1.0/fonts/fontawesome-webfont.eot',
        assetPath + 'font-awesome-4.1.0/fonts/fontawesome-webfont.svg',
        assetPath + 'font-awesome-4.1.0/fonts/fontawesome-webfont.ttf',
        assetPath + 'font-awesome-4.1.0/fonts/fontawesome-webfont.woff',
        assetPath + 'font-awesome-4.1.0/fonts/FontAwesome.otf',
        assetPath + 'fonts/glyphicons-halflings-regular.eot',
        assetPath + 'fonts/glyphicons-halflings-regular.svg',
        assetPath + 'fonts/glyphicons-halflings-regular.ttf',
        assetPath + 'fonts/glyphicons-halflings-regular.woff',
        assetPath + 'js/plugins/morris/raphael.min.js',
        assetPath + 'js/plugins/morris/morris.min.js',
        assetPath + 'js/plugins/morris/morris-data.js',
        assetPath + 'js/plugins/flot/jquery.flot.js',
        assetPath + 'js/plugins/flot/jquery.flot.tooltip.min.js',
        assetPath + 'js/plugins/flot/jquery.flot.resize.js',
        assetPath + 'js/plugins/flot/jquery.flot.pie.js',
        assetPath + 'js/plugins/flot/flot-data.js'
        ]

    api.add_files(assetFiles, 'client');

});