import { Faq } from "./Faq"
import { HeaderSection } from "./HeaderSection"

export const FaqSection = function () {
  return (
    <section className="sections" id="faqs">
      <HeaderSection
        title="FAQ (Preguntas Frecuentes)"
        description="Queremos que tu experiencia sea sencilla y sin preocupaciones. Aquí encontrarás las respuestas a las consultas más comunes sobre nuestros servicios, reservas y traslados."
      />
      <ul className="faq-list">
        <li>
          <Faq
            ask="¿Cómo puedo reservar un traslado o tour?"
            answer="Puedes hacerlo de forma rápida a través de nuestro botón de WhatsApp o completando el formulario de contacto. Te confirmaremos la disponibilidad en minutos."
          />
        </li>
        <li>
          <Faq
            ask="¿Qué medios de pago aceptan?"
            answer="Aceptamos transferencias bancarias, tarjetas de crédito/débito y pagos en efectivo en Puerto Natales."
          />
        </li>
        <li>
          <Faq
            ask="¿Puedo cancelar o modificar mi reserva?"
            answer="Sí, entendemos que los planes cambian. Puedes cancelar o modificar tu reserva con hasta 48 horas de anticipación sin costo adicional."
          />
        </li>
      </ul>
    </section>
  )
}