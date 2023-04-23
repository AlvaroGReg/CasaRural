let photosToShow = ["res/fotos/baño1.jpg","res/fotos/cocina1.jpg","res/fotos/cocina2.jpg","res/fotos/comedor1.jpg","res/fotos/comedor2.jpg","res/fotos/comedor3.jpg","res/fotos/comedor4.jpg","res/fotos/dormitorio1.jpg","res/fotos/dormitorio2.jpg","res/fotos/dormitorio3.jpg","res/fotos/dormitorio4.jpg","res/fotos/dormitorio5.jpg","res/fotos/porche1.jpg"]

/*MAIN GALLERY*/
const showPhoto = (src) => {
    console.log(src)
    document.getElementById('mainphoto').src = src;
}

showPhoto(photosToShow[0]);

/*SUBGALLERY*/
const showSubGallery = () => {
    const subframe = document.getElementById('subframe')

    photosToShow.forEach(element => {
        let newImg = document.createElement('img')
        newImg.classList.add('subgalleryimg')
        newImg.src = element
        newImg.onclick = function() {showPhoto(element)}
        subframe.appendChild(newImg)

        console.log(newImg)
    });
}

showSubGallery();