import "../styles/Services.css"

function Services(){

const services = [
"Limpieza dental",
"Blanqueamiento",
"Ortodoncia",
"Implantes",
"Odontología estética",
"Urgencias odontológicas"
]

return(

<section id="services" className="services">

<h2>Servicios</h2>

<div className="services-grid">

{services.map((service,index)=>(
<div key={index} className="service-card">

<h3>{service}</h3>

<p>
Tratamiento profesional con tecnología moderna y atención personalizada.
</p>

</div>
))}

</div>

</section>

)

}

export default Services