import { HeaderSection } from "./HeaderSection"
import { Reviews } from "./Reviews"

export const ReviewSection = function () {
  return (
    <section className="sections" id="reviews">
      <HeaderSection
        title="Testimonios de nuestros pasajeros"
        description="
          Nada habla mejor de un servicio que la experiencia de quienes ya confiaron en nosotros. Descubre las opiniones de pasajeros que eligieron nuestros traslados y tours en la Patagonia
        "
      />
      <ul className="review-list">
        <li>
          <Reviews
            review={`“El servicio fue impecable, puntuales y muy amables. Reservé por WhatsApp y todo fue súper fácil. ¡Totalmente recomendado para viajar a Torres del Paine!” — María G. (Chile)`}
          />
        </li>
        <li>
          <Reviews
            review={`“Vehículos cómodos y seguros. Nuestro chofer fue muy profesional y nos dio tips para aprovechar mejor el tour. Sin dudas volvería a contratarlos.” — James T. (EE.UU.)`}
          />
        </li>
        <li>
          <Reviews
            review={`“La puntualidad y la atención en inglés hicieron que nuestro viaje fuera mucho más fácil. Recomendado 100% para quienes visiten la Patagonia.” — Thomas L. (Alemania)`}
          />
        </li>
        <li>
          <Reviews
            review={`“Contratamos el Full Day a Torres del Paine y fue inolvidable. El guía conocía todos los rincones y la atención fue personalizada. ¡Vale la pena!” — Lucía R. (España)`}
          />
        </li>
      </ul>
    </section>
  )
}