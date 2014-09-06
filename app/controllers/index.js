function doClick(e) {
	doCamera();
}

$.index.open();

function openCamera() {

	var param = {
		success : function(event) {
			// l'operazione è andata a buon fine

			if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
				$.image.image = event.media;
			}

		},
		cancel : function() {
			// l'operazione è stata annullata
			alert("operazione annullata");
		},
		error : function(err) {
			// si è verificato un errore
			if (error.code == Titanium.Media.NO_CAMERA) {
				alert("no available camera");
			} else {
				alert('errore ' + JSON.stringify(err));
			}
		},

		saveToPhotoGallery : true,
		allowEditing : true,
		mediaTypes : [Ti.Media.MEDIA_TYPE_VIDEO, Ti.Media.MEDIA_TYPE_PHOTO]
	};

	//Titanium.Media.showCamera(param);
	Titanium.Media.openPhotoGallery(param);
}
