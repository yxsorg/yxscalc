	```javascript
	for(var i=0;i<1000;i++){
		var fileobj=
	{
	  "message": "my commit message",
	  "content": "bXkgdXBkYXRlZCBmaWxlIGNvbnRlbnRz",
		"branch":"master"
	};
	var sendobj={url:"https://api.github.com/repos/yxsicd/yxscalc/contents/abc/"+i+"/xx.md",data:JSON.stringify(fileobj),datetype:"json"
	,"type":"PUT",beforeSend:function(xhr){ xhr.setRequestHeader("Authorization"," token a55a9819b6080f4bc92e189c9060b38161b014dc");}
	}
	$.ajax(sendobj);
	}
	```
