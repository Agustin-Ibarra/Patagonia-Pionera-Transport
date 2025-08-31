import { Card } from "./Cards"
import { HeaderSection } from "./HeaderSection"

export const FeatureContainer = function () {
  return (
    <section id="features" className="sections">
      <HeaderSection
        title="¿Por qué elegirnos?"
        description="
          Viajar con nosotros significa comodidad, seguridad y confianza. Nuestra flota moderna y bien equipada, junto
          con conductores profesionales y bilingües, asegura un servicio seguro y eficiente.
          Disfruta de reservas digitales fáciles, puntualidad garantizada y atención personalizada en cada traslado o
          tour. Con nosotros, tu experiencia en la Patagonia será inolvidable desde el primer momento.
        "
      />
      <ul className="feature-list">
        <li className="feature-list-item">
          <Card
            imageUrl={`./images/safety-drive.jpg`}
            alt="drive image"
            serviceTitle="Seguridad ante todo"
            serviceDescription="Todos nuestros vehículos pasan controles estrictos y nuestros conductores son profesionales certificados." 
          />
        </li>
        <li className="feature-list-item">
          <Card
            imageUrl={`./images/digital.jpg`}
            alt="digital image"
            serviceTitle="Experiencia digital"
            serviceDescription="Reserva, paga y recibe tu comprobante de manera rápida y 100% online, sin complicaciones."
          />
        </li>
        <li className="feature-list-item">
          <Card
            imageUrl={`./images/confort-seat.jpg`}
            alt="confort seat image"
            serviceTitle="Flota moderna y cómoda"
            serviceDescription="Vehículos recientes, equipados para largos trayectos y diferentes condiciones climáticas."
          />
        </li>
        <li className="feature-list-item">
          <Card
            imageUrl={`./images/clock.jpg`}
            alt="clock image"
            serviceTitle="Puntualidad garantizada"
            serviceDescription="Cumplimos los horarios para que tu viaje sea confiable y sin estrés."
          />
        </li>
        <li className="feature-list-item">
          <Card
            imageUrl={`./images/flag.jpg`}
            alt="flag image"
            serviceTitle="Atención bilingüe"
            serviceDescription="Personal capacitado para comunicarte en español e inglés, facilitando la experiencia de todos los viajeros."
          />
        </li>
      </ul>
    </section>
  )
}