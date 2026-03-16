import "../styles/Testimonials.css"

function Testimonials(){

const reviews = [
"Excelente atención y profesionalismo.",
"El consultorio es muy moderno y cómodo.",
"Me explicaron todo el tratamiento paso a paso."
]

return(

<section className="testimonials">

<h2>Testimonios</h2>

<div className="testimonials-grid">

{reviews.map((review,index)=>(
<div key={index} className="testimonial-card">

<p>"{review}"</p>

</div>
))}

</div>

</section>

)

}

export default Testimonials