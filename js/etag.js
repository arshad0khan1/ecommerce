// Hide iframe
document.getElementById("iframe2").style.display = "none";

function track() {
    var iframe = document.getElementById("iframe2");
    var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
    var body = innerDoc.body;
    var etag = body.innerHTML;
    
    document.getElementById("trackingId").innerHTML = etag;
