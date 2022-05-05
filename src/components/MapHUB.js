import React from 'react'

// Carte Google Map de la brasserie
const MapHUB = () => {
  return (
    <div className="mb-20">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2527.5958154287728!2d3.1697907154902945!3d50.69032707793265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c329b8d9827f59%3A0x35c9b130d51bc668!2sBrasserie%20HUB%20-%20Hoppy%20Urban%20Brew!5e0!3m2!1sfr!2sfr!4v1651668283546!5m2!1sfr!2sfr"
        width="600"
        height="450"
        className="m-auto mt-8"
        title="Carte Brasserie HUB"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

export default MapHUB
