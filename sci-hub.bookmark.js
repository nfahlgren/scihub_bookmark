javascript:void(function () {
	var url = location.href;
	var parts = url.split('/');
	parts = parts.slice(2,parts.length);
	parts[0] = parts[0] + '.sci-hub.io';
	var newUrl = 'http://' + parts.join('/');
	location = newUrl;
}());
