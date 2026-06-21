"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ContactModal({ isOpen, onClose }: Props) {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleClose = useCallback(() => {
    onClose();
    setTimeout(() => {
      setIsSubmitted(false);
      setError("");
      setFormData({ name: "", email: "", message: "" });
    }, 300);
  }, [onClose]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, handleClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setIsSubmitted(true);
        setTimeout(() => handleClose(), 3500);
      } else {
        setError(language === "es" ? "Error al enviar. Inténtalo de nuevo." : "Error sending. Please try again.");
      }
    } catch {
      setError(language === "es" ? "Error al enviar. Inténtalo de nuevo." : "Error sending. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const copy = {
    en: {
      title: "Start Your Project",
      subtitle: "Tell us about your project and we'll get back to you within 24 hours.",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "your@email.com",
      message: "Project Description",
      messagePlaceholder: "Tell us about your project — what do you need, timeline, any details...",
      send: "Send Message",
      sending: "Sending...",
      successTitle: "Message Sent!",
      successBody: "We'll get back to you within 24 hours.",
    },
    es: {
      title: "Inicia Tu Proyecto",
      subtitle: "Cuéntanos sobre tu proyecto y te respondemos en menos de 24 horas.",
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      email: "Correo electrónico",
      emailPlaceholder: "tu@correo.com",
      message: "Descripción del proyecto",
      messagePlaceholder: "Cuéntanos sobre tu proyecto — qué necesitas, tiempos, detalles...",
      send: "Enviar Mensaje",
      sending: "Enviando...",
      successTitle: "¡Mensaje enviado!",
      successBody: "Te respondemos en menos de 24 horas.",
    },
  };
  const c = copy[language as keyof typeof copy];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none"
          >
            <div className="relative w-full max-w-lg bg-[#0e0f13] border border-white/[0.1] rounded-lg shadow-2xl pointer-events-auto">
              {/* Header */}
              <div className="flex items-start justify-between p-6 pb-4 border-b border-white/[0.06]">
                <div>
                  <h2 className="text-lg font-bold text-[#efece7]">{c.title}</h2>
                  <p className="text-sm text-[#5c5f66] mt-1">{c.subtitle}</p>
                </div>
                <button
                  onClick={handleClose}
                  className="ml-4 shrink-0 w-8 h-8 flex items-center justify-center rounded-sm border border-white/[0.08] text-[#5c5f66] hover:text-[#efece7] hover:border-white/20 transition-all"
                >
                  <X size={15} />
                </button>
              </div>

              {/* Body */}
              <div className="p-6">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-8 text-center"
                  >
                    <CheckCircle size={48} className="text-[#8b5cf6] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-[#efece7] mb-2">{c.successTitle}</h3>
                    <p className="text-sm text-[#b8b5ae]">{c.successBody}</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-[#b8b5ae] mb-1.5">{c.name} *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={c.namePlaceholder}
                        className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-sm text-[#efece7] placeholder-[#3e4149] text-sm focus:outline-none focus:border-[#8b5cf6]/60 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#b8b5ae] mb-1.5">{c.email} *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={c.emailPlaceholder}
                        className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-sm text-[#efece7] placeholder-[#3e4149] text-sm focus:outline-none focus:border-[#8b5cf6]/60 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#b8b5ae] mb-1.5">{c.message} *</label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={c.messagePlaceholder}
                        className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-sm text-[#efece7] placeholder-[#3e4149] text-sm focus:outline-none focus:border-[#8b5cf6]/60 transition resize-none"
                      />
                    </div>

                    {error && <p className="text-xs text-red-400">{error}</p>}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-[#8b5cf6] text-white font-semibold text-sm hover:shadow-xl hover:shadow-violet-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          {c.sending}
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          {c.send}
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
