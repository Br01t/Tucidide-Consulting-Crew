import React from 'react';
import { motion } from 'motion/react';

const TermsOfService = () => {
  return (
    <div className="pt-32 pb-24 px-12 uppercase-selection">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-azure text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Legale // Lex</span>
          <h1 className="text-5xl md:text-7xl font-serif font-black uppercase tracking-tight mb-16">
            Terms of Service
          </h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.2, duration: 1 }}
          className="space-y-12 text-slate-400 font-light leading-relaxed"
        >
          <section>
            <h2 className="text-white font-serif text-2xl uppercase tracking-widest mb-6 border-b border-white/10 pb-4">1. Accettazione dei Termini</h2>
            <p className="mb-4">
              Accedendo e utilizzando questo sito web, l'utente accetta di essere vincolato dai presenti Termini di Servizio, da tutte le leggi e dai regolamenti applicabili. Se non sei d'accordo con uno qualsiasi di questi termini, ti è proibito utilizzare o accedere a questo sito.
            </p>
          </section>

          <section>
            <h2 className="text-white font-serif text-2xl uppercase tracking-widest mb-6 border-b border-white/10 pb-4">2. Licenza d'Uso</h2>
            <p className="mb-4">
              Il contenuto di questo sito (testi, immagini, icone, codice sorgente) è protetto dalle leggi sul copyright. È concessa l'autorizzazione a scaricare temporaneamente una copia dei materiali solo per visione personale e non commerciale.
            </p>
            <p>Questa è la concessione di una licenza, non un trasferimento di titolo, e sotto questa licenza non è possibile:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Modificare o copiare i materiali per scopi commerciali o per qualsiasi esposizione pubblica.</li>
              <li>Tantare di decompilare o decodificare qualsiasi software contenuto nel sito web di Tucidide.</li>
              <li>Rimuovere qualsiasi copyright o altre notazioni di proprietà dai materiali.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-serif text-2xl uppercase tracking-widest mb-6 border-b border-white/10 pb-4">3. Limitazioni</h2>
            <p>
              In nessun caso Tucidide Consulting Crew sarà responsabile per eventuali danni (inclusi, senza limitazioni, danni per perdita di dati o profitti, o a causa di interruzione dell'attività) derivanti dall'uso o dall'impossibilità di utilizzare i materiali sul sito web.
            </p>
          </section>

          <section>
            <h2 className="text-white font-serif text-2xl uppercase tracking-widest mb-6 border-b border-white/10 pb-4">4. Revisioni e Errori</h2>
            <p>
              I materiali che appaiono sul sito web di Tucidide potrebbero includere errori tecnici, tipografici o fotografici. Tucidide non garantisce che i materiali sul suo sito siano accurati, completi o attuali. Tucidide può apportare modifiche ai materiali contenuti nel suo sito web in qualsiasi momento senza preavviso.
            </p>
          </section>

          <div className="pt-12 border-t border-white/5 opacity-40 text-[10px] uppercase tracking-[0.2em]">
            Ultimo aggiornamento: Aprile 2024 // Protocollo Lex_v1.0
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
