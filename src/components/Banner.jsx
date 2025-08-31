export const Banner = function () {
  return (
    <section className="banner">
      <div className="banner-div">
        <p className="subtitle">
          Explora la Patagonia con traslados seguros y tours privados desde Puerto Natales.
        </p>
        <p className="promise">
          ¿Listo para tu aventura en la Patagonia?
          Haz tu reserva de manera rápida y sencilla directamente por WhatsApp. Nuestro equipo responderá al instante,
          resolverá tus dudas y confirmará tu traslado o tour en minutos.
          <a href="https://web.whatsapp.com" className="chat roboto-ligth" title="whatsapp link">WhatsApp
            <img src="./images/whatsapp-logo.png" alt="WhatsApp-icon" className="WhatsApp-icon" title="whatsapp link imagen" />
          </a>
        </p>
      </div>
    </section>
  )
}