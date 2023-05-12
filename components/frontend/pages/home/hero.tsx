import React from "react";

export default function HomeHero() {
  return (
    <header className="bg-amber-600 relative z-0 after:absolute after:-z-10 after:inset-0 after:bg-gradient-to-t after:from-black/90 after:to-black/30">
      <div className="container min-h-screen max-h-[1000px] flex flex-col items-center justify-center text-center gap-6">
        <h1 className="font-bold font-display text-7xl text-amber-600">
          Le Poète Alain Alfred Moutapam
        </h1>

        <p className="text-2xl text-white">
          Découvrez son monde de Poésie pleurée, ses pleurs chantés, par ses
          recueils de poèmes, cartes poétiques, vidéos, articles de journaux et
          interviews. <br />
          Sans oublier les extraordinaires dessins et tableaux de son célèbre
          artiste de Père: le peintre Aniambossou, créateur du Forcubisme et des
          visages tourmentés.
        </p>
      </div>
    </header>
  );
}
