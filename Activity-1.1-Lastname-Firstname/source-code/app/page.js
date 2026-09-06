"use client";

import HeaderNavigation from "./components/organisms/HeaderNavigation";
import HeritageGrid from "./components/organisms/HeritageGrid";

export default function Home() {
  return (
    <main>
      <HeaderNavigation />

      <section className="hero">
        <p className="eyebrow">PANGASINAN HERITAGE</p>

        <h1>Discover places that tell our story.</h1>

        <p className="heroText">
          Explore iconic destinations across Pangasinan through a fast,
          accessible and mobile-first digital showcase.
        </p>
      </section>

      <HeritageGrid />
    </main>
  );
}