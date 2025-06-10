"use client";
import React, { useEffect } from "react";
import * as CookieConsent from "vanilla-cookieconsent";
import pluginConfig from "./cookieconsent-config";

const CookieConsentComponent = () => {
  useEffect(() => {
    CookieConsent.run(pluginConfig);
  }, []);

  return (
    <button
      className="px-4 py-2 transition border rounded text-secondary border-secondary hover:bg-secondary hover:text-white"
      onClick={() => CookieConsent.showPreferences()}
    >
      Mostra preferenze cookie
    </button>
  );
};

export default CookieConsentComponent;

