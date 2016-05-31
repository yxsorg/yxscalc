function parseZipFile(input, callback) {
    var reader = new FileReader();
    reader.onload = function (e) {
        content = e.target.result;
        var input_zip = new JSZip();
        input_zip.load(content);
        callback ? callback(input_zip) : 0;
    }

    if (input instanceof HTMLInputElement) {
        if(input.files.length<1){
            return;
        }
        input = input.files[0];
    }
    reader.readAsArrayBuffer(input);
}

function test() {
    JSZipUtils.getBinaryContent('example.zip', function (err, data) {
        if (err) {
            throw err; // or handle err
        }
        var zip = new JSZip(data);
        console.log(zip);
        var img=zip.file("images/pkq.jpg").asUint8Array();
        console.log(img);
        var img2=zip.file("content.txt").asText();
        console.log(img2);
        var bl=new Blob([img],{'type':"image/png"});
        var fr=new FileReader();
        fr.onload=function (e){
            var re= e.target.result;
            ttimg.src=re;
        }
        fr.readAsDataURL(bl);
    });
}


