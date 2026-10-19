// Go back to the previous page
function goBack() {
    window.history.back();
}

// Function to open modal with clicked media
function openMedia(media) {
    var modal = document.getElementById("mediaModal");
    var modalImage = document.getElementById("modalImage");
    var modalVideo = document.getElementById("modalVideo");

    // Check if the clicked item is an image or a video
    if (media.tagName === 'IMG') {
        modalImage.src = media.src;
        modalImage.style.display = "block";
        modalVideo.style.display = "none";
    } else if (media.tagName === 'VIDEO') {
        modalVideo.src = media.src;
        modalVideo.style.display = "block";
        modalImage.style.display = "none";
    }

    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("mediaModal");
    modal.style.display = "none";
    var modalImage = document.getElementById("modalImage");
    var modalVideo = document.getElementById("modalVideo");
    modalImage.src = "";
    modalVideo.src = "";
}
