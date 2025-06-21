"use client";
import { useState } from "react";
import { IoCalendarOutline, IoLogoWhatsapp } from "react-icons/io5";
import dataSettings from "@content/settings.json";
import Link from "next/link";
interface ContactFormModalProps {
  serviziData: string[];
}
const ContactFormModal: React.FC<ContactFormModalProps> = ({ serviziData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    cellulare: "",
    dataAppuntamento: "",
    servizio: "",
    messaggio: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.nome ||
      !formData.email ||
      !formData.dataAppuntamento ||
      !formData.servizio ||
      !formData.messaggio
    ) {
      alert("Per favore compila tutti i campi obbligatori");
      return;
    }

    console.log("Dati del form:", formData);
    alert(
      "Richiesta inviata con successo! Ti contatteremo presto per confermare l'appuntamento."
    );

    setFormData({
      nome: "",
      email: "",
      cellulare: "",
      dataAppuntamento: "",
      servizio: "",
      messaggio: "",
    });
    setIsOpen(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <div className="grid grid-cols-1 gap-1 lg:grid-cols-2">
        <button onClick={() => setIsOpen(true)} className="flex items-center justify-center px-8 py-4 mt-5 text-lg text-center text-white transition-all duration-300 transform border-2 shadow-lg lg:mr-5 bg-secondary group hover:bg-primary hover:text-white border-secondary hover:from-primary hover:to-secondary rounded-2xl hover:scale-105 hover:shadow-3xl focus:outline-none">
          <IoCalendarOutline className="w-6 h-6 mr-3" />
          PRENOTA APPUNTAMENTO
        </button>
        
        <Link
          href={"https://wa.me/" + dataSettings.cellulare + "?text=Ciao%20Fisioste,%20vorrei%20richiedere%20un%20appuntamento."}
          className="flex items-center justify-center px-8 py-4 mt-5 text-lg text-center transition-all duration-300 transform bg-white border-2 shadow-lg lg:mr-5 text-secondary group hover:bg-primary hover:text-white border-secondary hover:from-primary hover:to-secondary rounded-2xl hover:scale-105 hover:shadow-3xl focus:outline-none"
        >
          <IoLogoWhatsapp className="w-6 h-6 mr-3" />
          CONTATTACI SU WHATSAPP
        </Link>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[500] p-4 overflow-y-auto bg-white/40 backdrop-blur-sm animate-in fade-in pb-24"
          data-aos="fade-in"
          data-aos-duration="500"
        >
          <div className="flex items-center justify-center min-h-full">
            <div className="z-[500] w-full max-w-2xl overflow-visible duration-300 transform bg-white shadow-2xl rounded-3xl animate-in zoom-in-95">
              <div className="relative p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-3xl">
                <div className="absolute inset-0 bg-black opacity-10 rounded-t-3xl"></div>
                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="text-white">
                      <h2 className="mb-2 text-2xl font-bold">
                        Prenota la tua Consulenza
                      </h2>
                      <p className="text-sm text-blue-100">
                        Compila il form per richiedere un appuntamento. Ti
                        contatteremo per confermare.
                      </p>
                    </div>
                    <button
                      onClick={closeModal}
                      className="p-2 text-white transition-colors duration-200 rounded-full hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="group">
                    <label
                      htmlFor="nome"
                      className="flex items-center mb-2 text-sm font-semibold text-gray-700"
                    >
                      <svg
                        className="w-4 h-4 mr-2 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      Nome <span className="ml-1 text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="nome"
                      value={formData.nome}
                      onChange={(e) =>
                        handleInputChange("nome", e.target.value)
                      }
                      placeholder="Il tuo nome"
                      required
                      className="w-full px-4 py-3 transition-all duration-200 border-2 border-gray-200 shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent group-hover:border-gray-300"
                    />
                  </div>
                  <div className="group">
                    <label
                      htmlFor="email"
                      className="flex items-center mb-2 text-sm font-semibold text-gray-700"
                    >
                      <svg
                        className="w-4 h-4 mr-2 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Email <span className="ml-1 text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="la-tua-email@esempio.com"
                      required
                      className="w-full px-4 py-3 transition-all duration-200 border-2 border-gray-200 shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent group-hover:border-gray-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="group">
                    <label
                      htmlFor="cellulare"
                      className="flex items-center mb-2 text-sm font-semibold text-gray-700"
                    >
                      <svg
                        className="w-4 h-4 mr-2 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      Cellulare
                    </label>
                    <input
                      type="tel"
                      id="cellulare"
                      value={formData.cellulare}
                      onChange={(e) =>
                        handleInputChange("cellulare", e.target.value)
                      }
                      placeholder="+39 123 456 7890"
                      className="w-full px-4 py-3 transition-all duration-200 border-2 border-gray-200 shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent group-hover:border-gray-300"
                    />
                  </div>
                  <div className="group">
                    <label
                      htmlFor="dataAppuntamento"
                      className="flex items-center mb-2 text-sm font-semibold text-gray-700"
                    >
                      <svg
                        className="w-4 h-4 mr-2 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      Data Appuntamento{" "}
                      <span className="ml-1 text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="dataAppuntamento"
                      value={formData.dataAppuntamento}
                      onChange={(e) =>
                        handleInputChange("dataAppuntamento", e.target.value)
                      }
                      min={today}
                      required
                      className="w-full px-4 py-3 transition-all duration-200 border-2 border-gray-200 shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent group-hover:border-gray-300"
                    />
                  </div>
                </div>

                <div className="group">
                  <label
                    htmlFor="servizio"
                    className="flex items-center mb-2 text-sm font-semibold text-gray-700"
                  >
                    <svg
                      className="w-4 h-4 mr-2 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Servizio Richiesto{" "}
                    <span className="ml-1 text-red-500">*</span>
                  </label>
                  <select
                    id="servizio"
                    value={formData.servizio}
                    onChange={(e) =>
                      handleInputChange("servizio", e.target.value)
                    }
                    required
                    className="w-full px-4 py-3 transition-all duration-200 bg-white border-2 border-gray-200 shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent group-hover:border-gray-300"
                  >
                    <option value="">Seleziona un servizio</option>
                    {serviziData.map((servizio) => (
                      <option key={servizio} value={servizio}>
                        {servizio}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="group">
                  <label
                    htmlFor="messaggio"
                    className="flex items-center mb-2 text-sm font-semibold text-gray-700"
                  >
                    <svg
                      className="w-4 h-4 mr-2 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    Messaggio <span className="ml-1 text-red-500">*</span>
                  </label>
                  <textarea
                    id="messaggio"
                    value={formData.messaggio}
                    onChange={(e) =>
                      handleInputChange("messaggio", e.target.value)
                    }
                    placeholder="Descrivi il tuo problema, sintomi o richiesta specifica..."
                    required
                    rows={4}
                    className="w-full px-4 py-3 transition-all duration-200 border-2 border-gray-200 shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent group-hover:border-gray-300 resize-vertical"
                  />
                </div>

                <div className="flex flex-col justify-end pt-6 space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-6 py-3 text-sm font-semibold text-gray-700 transition-all duration-200 bg-gray-100 border-2 border-gray-200 shadow-sm hover:bg-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                  >
                    Annulla
                  </button>
                  <button
                    type="submit"
                    className="relative px-8 py-3 text-sm font-bold text-white transition-all duration-200 transform shadow-lg group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:scale-105"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                      <span>Invia Richiesta</span>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ContactFormModal;
