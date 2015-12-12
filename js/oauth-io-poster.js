function shareImageOnFacebook() {
    OAuth.initialize(FacebookOAuthIOAppKey);
    OAuth.popup("facebook").then(function(result) {

        var blob = getImageBlob();

        var data = new FormData();
        data.append('message', getSocialMessage());
        data.append('source', blob);

        return result.post('/me/photos', {
            data: data,
            cache:false,
            processData: false,
            contentType: false
        });
    }).done(function(data){
        displayShareMessage('Facebook post successful!');
    }).fail(function(e){
        displayShareMessage('Facebook post failed. Error was: ' + e);
    });
}

function getImageBlob(mimetype) {

    var dataURI = Base64EncodedImage.replace(/^data:image\/(png|jpg|jpeg);base64,/, "");

    var byteString = window.atob(dataURI);

    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    var blob = new Blob([ia], { type: "image/jpeg" });

    return blob;
}

function shareImageOnTwitter() {
    OAuth.initialize(TwitterOAuthIOAppKey);
    OAuth.popup("twitter").then(function(result) {

        var blob = getImageBlob();

        var data = new FormData();
        data.append('status', getSocialMessage());
        data.append('media[]', blob);

        return result.post('/1.1/statuses/update_with_media.json', {
            data: data,
            cache:false,
            processData: false,
            contentType: false
        });
    }).done(function(data){
        displayShareMessage('Tweet successful!');
    }).fail(function(e){
        displayShareMessage('Tweet failed. Error was: ' + e);
    });
}

function displayShareMessage(statusmessage) {
    document.getElementById('shareStatus').textContent = 'Status: ' + statusmessage;
}

function getSocialMessage() {
    return document.getElementById('testMessage').value;
}