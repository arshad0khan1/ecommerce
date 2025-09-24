function track() {
    try {
        var iframe = document.getElementById("iframe2");
        var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
        var etag = innerDoc.body.innerHTML;
        document.getElementById("trackingId").textContent = etag;
    } catch (e) {
        console.error("Failed to read iframe content:", e);
    }
}
