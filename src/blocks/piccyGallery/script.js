window.onload = () => {
    const gallaries = Array.from(document.getElementsByClassName("wp-block-blockylicious-piccy-gallery"));

    gallaries.forEach(gallery => {
        const thumbnails = Array.from(document.getElementsByClassName("thumb"));

        if(thumbnails?.[0]){
            const imagePreview = Array.from(gallery.getElementsByClassName("image-preview"));
            imagePreview[0].src = thumbnails[0].dataset.largeSize;
            thumbnails[0].classList.add("selected");
        }

        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener("click", () => {
                const selected = Array.from(gallery.getElementsByClassName("thumb selected"));
                
                selected.forEach(image => {
                    image.classList.remove("selected");
                });

                thumbnail.classList.add("selected");

                const imagePreview = Array.from(gallery.getElementsByClassName("image-preview"));
                imagePreview[0].src = thumbnail.dataset.largeSize;
            })
        })
    })

}