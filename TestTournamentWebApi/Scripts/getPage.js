function getAll() {
	var req = new XMLHttpRequest();
    var url = 'http://localhost:51217/api/Game/'
	req.open('GET', url)
    req.onload = function () {
        $('#results').empty();
		var list = JSON.parse(req.response)
        for (var i = 0; i < list.length; i++) {
            
			var item = list[i];
			for (var field in item) {
				document.getElementById("results").innerHTML += field +
					" : " + item[field] + ", "
			}
			document.getElementById("results").innerHTML += "<br>"
		}
	}
	req.onerror = function () {
		alert('error')
	}
	req.send()
}

function getById() {
    id = $('#getId').val();
    var req = new XMLHttpRequest();
    var url = 'http://localhost:51217/api/Game/' + id;
    req.open('GET', url)
    req.onload = function () {
        $('#results').text(req.response);
    }
    req.onerror = function () {
        alert(req.response);
    }
    req.send();
}
