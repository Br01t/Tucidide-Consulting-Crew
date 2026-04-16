import React from 'react';
import { motion } from 'motion/react';

const PrivacyPolicy = () => {
  return (
    <div className="pt-32 pb-24 px-12 uppercase-selection">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-azure text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Legale // Nomos</span>
          <h1 className="text-5xl md:text-7xl font-serif font-black uppercase tracking-tight mb-16">
            Privacy Policy
          </h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.2, duration: 1 }}
          className="space-y-12 text-slate-400 font-light leading-relaxed"
        >
          <section>
            <h2 className="text-white font-serif text-2xl uppercase tracking-widest mb-6 border-b border-white/10 pb-4">1. Raccolta dei Dati</h2>
            <p className="mb-4">
              La presente Informativa sulla privacy descrive come Tucidide Consulting Crew ("noi", "nostro" o "il Collettivo") raccoglie, utilizza e protegge le informazioni personali che ci fornisci attraverso il nostro sito web.
            </p>
            <p>
              Raccogliamo solo i dati essenziali per la fornitura dei nostri servizi e la comunicazione con voi. Questi possono includere nome, indirizzo email e dettagli del progetto forniti volontariamente tramite i nostri moduli di contatto.
            </p>
          </section>

          <section>
            <h2 className="text-white font-serif text-2xl uppercase tracking-widest mb-6 border-b border-white/10 pb-4">2. Utilizzo delle Informazioni</h2>
            <p className="mb-4">
              I dati raccolti vengono utilizzati esclusivamente per:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Rispondere alle vostre richieste di collaborazione.</li>
              <li>Fornire aggiornamenti sui progetti in corso.</li>
              <li>Ottimizzare l'esperienza di navigazione sul nostro sito web.</li>
            </ul>
            <p>
              Non vendiamo, scambiamo o trasferiamo a terzi le tue informazioni personali senza il tuo esplicito consenso, se non per quanto strettamente necessario per l'erogazione del servizio.
            </p>
          </section>

          <section>
            <h2 className="text-white font-serif text-2xl uppercase tracking-widest mb-6 border-b border-white/10 pb-4">3. Sicurezza dei Dati</h2>
            <p>
              Implementiamo misure di sicurezza di livello industriale per proteggere i tuoi dati. Trattiamo le tue informazioni con lo stesso rigore logico che applichiamo al nostro codice, garantendo che l'accesso non autorizzato sia impedito da protocolli di crittografia avanzati.
            </p>
          </section>

          <section>
            <h2 className="text-white font-serif text-2xl uppercase tracking-widest mb-6 border-b border-white/10 pb-4">4. I Tuoi Diritti</h2>
            <p>
              Hai il diritto di accedere, rettificare o richiedere la cancellazione dei tuoi dati personali in qualsiasi momento. Per esercitare questi diritti, ti preghiamo di contattarci all'indirizzo crew@tucidide.io.
            </p>
          </section>

          <div className="pt-12 border-t border-white/5 opacity-40 text-[10px] uppercase tracking-[0.2em]">
            Ultimo aggiornamento: Aprile 2024 // Codice Nomos_v1.0
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
