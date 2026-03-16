import "../styles/Gallery.css"

function Gallery(){

const images = [
"https://images.unsplash.com/photo-1606811971618-4486d14f3f99",
"https://images.unsplash.com/photo-1588776814546-1ffcf47267a5",
"https://images.unsplash.com/photo-1629909613654-28e377c37b09"
]

return(

<section id="gallery" className="gallery">

<h2>Nuestro consultorio</h2>

<div className="gallery-grid">

{images.map((img,index)=>(
<img key={index} src={img} alt="consultorio"/>
))}

</div>

</section>

)

}

export default Gallery