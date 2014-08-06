Package.describe({
	summary: "SB Admin bootstrap 3 template packaged for Meteor"
});

Package.on_use(function (api){

	api.use('jquery','client');
	
	var path = Npm.require('path');
    var assetPath = path.join('lib/sb-admin/');

    var assetFiles = [
        assetPath + 'css/bootstrap.min.css',
        assetPath + 'css/sb-admin.css',
        assetPath + 'css/plugins/morris.css',
        assetPath + 'css/font-awesome-4.1.0/css/font-awesome.min.css',
        assetPath + 'css/font-awesome-4.1.0/fonts/fontawesome-webfont.eot',
        assetPath + 'css/font-awesome-4.1.0/fonts/fontawesome-webfont.svg',
        assetPath + 'css/font-awesome-4.1.0/fonts/fontawesome-webfont.ttf',
        assetPath + 'css/font-awesome-4.1.0/fonts/fontawesome-webfont.woff',
        assetPath + 'css/font-awesome-4.1.0/fonts/FontAwesome.otf',
        assetPath + 'css/fonts/glyphicons-halflings-regular.eot',
        assetPath + 'css/fonts/glyphicons-halflings-regular.svg',
        assetPath + 'css/fonts/glyphicons-halflings-regular.ttf',
        assetPath + 'css/fonts/glyphicons-halflings-regular.woff',
        assetPath + 'js/plugins/flot/excanvas.min.js',
        assetPath + 'js/plugins/flot/flot-data.js',
        assetPath + 'js/plugins/flot/jquery.flot.js',
        assetPath + 'js/plugins/flot/jquery.flot.pie.js',
        assetPath + 'js/plugins/flot/jquery.flot.resize.js',
        assetPath + 'js/plugins/flot/jquery.flot.tooltip.min.js',
        assetPath + 'js/plugins/morris/morris-data.js',
        assetPath + 'js/plugins/morris/morris.min.js',
        assetPath + 'js/plugins/morris/raphael.min.js',
        assetPath + 'js/bootstrap.min.js',
        ]

    api.add_files(assetFiles, 'client');

});