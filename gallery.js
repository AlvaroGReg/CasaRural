const photosToShow = ["res/fotos/comedor.jpg","res/fotos/bano_verde.jpg","res/fotos/bano1.jpg","res/fotos/bano2.jpg","res/fotos/cobertizo.jpg","res/fotos/cocina.jpg","res/fotos/comedor-chimene.jpg","res/fotos/comedor-mesa.jpg","res/fotos/comedor.jpg","res/fotos/dormitorio_peq.jpg","res/fotos/dormitorio_princ.jpg","res/fotos/dormitorio_princ2.jpg","res/fotos/dormitorio-peques.jpg","res/fotos/dormitorio2.jpg","res/fotos/escaleras.jpg","res/fotos/fachada.jpg","res/fotos/jardin.jpg","res/fotos/merendero.jpg","res/fotos/parcela.jpg","res/fotos/porche1.jpg","res/fotos/salita.jpg","res/fotos/ventana.jpg","res/fotos/jardin-nieve.jpg"]

/*MAIN GALLERY*/
const showPhoto = (src) => {
    document.getElementById('mainphoto').src = src;
}

const nextPhoto = (number) => {

    let index = photosToShow.indexOf(document.getElementById('mainphoto').getAttribute('src'))

    if(index==0 && number < 0){
        index = photosToShow.length-1
    }else if(index==photosToShow.length-1 && number>0){
        index = 0
    }else{
        index += number
    }
    showPhoto(photosToShow[index])
}

/*SUBGALLERY*/
const showSubGallery = () => {
    const subframe = document.getElementById('subframe')

    photosToShow.forEach(element => {
        let newImg = document.createElement('img')
        newImg.classList.add('subgalleryimg')
        newImg.src = element
        newImg.onclick = function() {showPhoto(element)}
        subframe.appendChild(newImg)
    });
}

showPhoto(photosToShow[0]);
showSubGallery();