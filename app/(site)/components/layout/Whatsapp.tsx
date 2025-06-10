"use client"
import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import dataSettings from '@content/settings.json'

function Whatsapp() {
  return (
    <FloatingWhatsApp
      accountName={dataSettings.titoloSito}
      phoneNumber={dataSettings.cellulare}
      avatar={dataSettings.logo}
      placeholder="Scrivi..."
      chatMessage="Ciao, come possiamo aiutarti?"
      statusMessage="Disponibile"
      buttonClassName="z-30 mb-9 -mr-3 md:mr-0 md:mb-0"
    />
  )
}

export default Whatsapp
