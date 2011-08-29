var win = Ti.UI.currentWindow;
var table = Ti.UI.createTableView();
win.add(table);

function showItems(items) {
	var data = [];
	for(var i=0;i<items.length;i++){
		var row = Ti.UI.createTableViewRow();
		row.title = items.item(i).getElementsByTagName("title").item(0).text;
		data.push(row);	
	}
	table.setData(data);
}

var xhr = Ti.Network.createHTTPClient();
xhr.open('GET','http://b.hatena.ne.jp/hotentry.rss');
xhr.onload  = function() {
	var xml = this.responseXML;
    
	// Find the RSS feed 'items'
	var items = xml.documentElement.getElementsByTagName("item");
	showItems(items);
}
xhr.send();
