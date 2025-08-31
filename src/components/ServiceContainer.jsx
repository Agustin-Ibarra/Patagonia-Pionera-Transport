import { Card } from "./Cards"
import { HeaderSection } from "./HeaderSection"

export const ServiceContainer = function () {
  return (
    <section id="services" className="sections">
      <HeaderSection
        title="Servicios/Traslados"
        description={`Disfruta de la Patagonia sin preocupaciones. Ofrecemos traslados seguros, cómodos y confiables entre los
          principales destinos: desde el Aeropuerto de Punta Arenas hasta Puerto Natales, y tours de Full Day a Torres
          del Paine y Cerro Castillo.

          Ya sea que elijas un tour privado o compartido, nuestra flota moderna, conductores profesionales y atención
          bilingüe harán que tu viaje sea eficiente, seguro y memorable. Reserva online de manera rápida y comienza tu
          aventura sin complicaciones.`}
      />
      <ul className="service-list">
        <li className="service-list-item">
          <Card
            imageUrl={`./images/airport.jpg`}
            alt="airport image"
            serviceTitle="Traslado desde el aeropuerto Punta Arenas y la ciudad de Puerto Natales."
            serviceDescription="Comienza tu aventura en la Patagonia sin preocupaciones. Te llevamos desde el aeropuerto de Punta Arenas a Puerto Natales en vehículos cómodos y seguros, para que tu viaje inicie de la mejor manera."
          />
        </li>
        <li className="service-list-item">
          <Card
            imageUrl={`./images/full-day.jpg`}
            alt="airport image"
            serviceTitle="Full Day Torres del Paine"
            serviceDescription="Descubre uno de los paisajes más impresionantes del mundo en un tour completo al Parque Nacional Torres del Paine. Recorrerás miradores, lagos y montañas icónicas en una experiencia inolvidable, con la flexibilidad de elegir tour compartido o privado."
          />
        </li>
      </ul>
      <div className="card-container">
      </div>
    </section>
  )
}