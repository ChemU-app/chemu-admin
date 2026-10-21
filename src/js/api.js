{
	const ADDRESS = "https://52.206.48.241/api/admin/"
	function call_chemuapi(method, endpoint, token, body, callback){
		const xhr = new XMLHttpRequest()
		xhr.open(method, ADDRESS + endpoint, true)
		if(token != null){
			xhr.setRequestHeader("authorization", "Bearer " + token)
		}
		xhr.setRequestHeader("Content-Type", "text/plain")
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4){
				if(callback != null){
					callback(xhr.status, xhr.responseText)
				}
			}
		}
		xhr.send(body);
	}

	window.call_chemuapi = call_chemuapi
}
