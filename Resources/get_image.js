var win = Ti.UI.currentWindow;

var xhr = Ti.Network.createHTTPClient();
xhr.open('GET','http://cdn-ak.f.st-hatena.com/images/fotolife/r/r_kurain/20090622/20090622140659.jpg');
xhr.onload  = function() {
	var data = this.responseData;
	var imageView = Ti.UI.createImageView({image:data});
	Ti.Media.saveToPhotoGallery(data);
	win.add(imageView);
	
}
xhr.send();

var res = Titanium.Yahoo.yql(
	'select * from html where url="http://b.hatena.ne.jp/" and xpath="//head/title"',
	function(e){
		if (e.success)
			alert(e.data.title);
	}
);



