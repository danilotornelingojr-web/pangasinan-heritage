"use client";

import { useState } from "react";
import Image from "../atoms/Image";

export default function HeritageCard({
  title,
  description,
  image,
  href,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const details = {
    "Hundred Islands": {
      location: "Alaminos City, Pangasinan",
      overview:
        "Hundred Islands is a famous natural attraction in Pangasinan known for its beautiful islands, clear waters, and distinctive limestone formations.",
      history:
        "Hundred Islands has become one of the most recognized tourist destinations in Pangasinan and an important part of Alaminos City's tourism.",
      significance:
        "The destination is important because of its natural beauty, tourism value, and contribution to the local community.",
      activities: [
        "Island hopping",
        "Swimming",
        "Kayaking",
        "Sightseeing",
        "Photography",
      ],
      attractions:
        "Visitors can explore different islands, enjoy coastal scenery, and experience unique limestone formations.",
      bestTime:
        "A clear and dry day is ideal for outdoor activities and sightseeing.",
      tips:
        "Bring water, sunscreen, comfortable clothes, and always keep the area clean.",
    },

    "Bolinao Lighthouse": {
      location: "Bolinao, Pangasinan",
      overview:
        "Bolinao Lighthouse is a historic coastal landmark offering scenic views of the sea and surrounding landscape.",
      history:
        "The lighthouse forms part of Bolinao's coastal heritage and is a recognizable landmark in the area.",
      significance:
        "It represents part of Bolinao's historical and coastal identity and is a popular sightseeing destination.",
      activities: [
        "Sightseeing",
        "Photography",
        "Enjoying the coastal view",
        "Exploring nearby attractions",
        "Sunset viewing",
      ],
      attractions:
        "The lighthouse structure and its elevated coastal surroundings are the main attractions.",
      bestTime:
        "Late afternoon is a good time to visit, especially for scenic views and sunset photography.",
      tips:
        "Wear comfortable footwear, stay in designated areas, and respect the site.",
    },

    "Balungao Hot Spring": {
      location: "Balungao, Pangasinan",
      overview:
        "Balungao Hot Spring is a natural attraction known for its warm waters and relaxing outdoor environment.",
      history:
        "The hot spring has become a recognized recreational destination in Balungao.",
      significance:
        "It showcases one of Pangasinan's natural attractions and provides a recreational destination for visitors.",
      activities: [
        "Hot spring bathing",
        "Swimming",
        "Relaxation",
        "Sightseeing",
        "Photography",
      ],
      attractions:
        "The warm spring waters and surrounding natural scenery are the main attractions.",
      bestTime:
        "Visit during comfortable weather conditions so you can enjoy the outdoor surroundings.",
      tips:
        "Bring extra clothes, drinking water, personal necessities, and follow safety rules.",
    },
  };

  const info = details[title] || {
    location: "Pangasinan, Philippines",
    overview: description,
    history:
      "This destination is part of the tourism and heritage landscape of Pangasinan.",
    significance:
      "The destination contributes to the natural, historical, or cultural identity of Pangasinan.",
    activities: [
      "Sightseeing",
      "Photography",
      "Exploring",
    ],
    attractions:
      "Visitors can explore the destination and appreciate its unique features.",
    bestTime:
      "Choose a suitable day with comfortable weather.",
    tips:
      "Respect the area, keep it clean, and follow visitor guidelines.",
  };

  return (
    <>
      <article className="card">
        <Image src={image} alt={title} />

        <div className="cardBody">
          <h3>{title}</h3>

          <p>{description}</p>

          <button
            type="button"
            className="exploreButton"
            onClick={() => setIsOpen(true)}
          >
            Explore
          </button>
        </div>
      </article>

      {isOpen && (
        <div
          className="heritageModal"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} details`}
        >
          <div className="heritageModalContent">

            {/* CLOSE BUTTON */}
            <button
              type="button"
              className="modalClose"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              ×
            </button>

            {/* HERO IMAGE */}
            <div className="modalImageWrapper">
              <Image src={image} alt={title} />
            </div>

            {/* DETAILS */}
            <div className="modalContent">

              <p className="modalLocation">
                📍 {info.location}
              </p>

              <h2>{title}</h2>

              <section>
                <h3>Overview</h3>
                <p>{info.overview}</p>
              </section>

              <section>
                <h3>History</h3>
                <p>{info.history}</p>
              </section>

              <section>
                <h3>Cultural / Historical Significance</h3>
                <p>{info.significance}</p>
              </section>

              <section>
                <h3>Things to Do</h3>

                <ul className="activityList">
                  {info.activities.map((activity) => (
                    <li key={activity}>{activity}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h3>Key Attractions</h3>
                <p>{info.attractions}</p>
              </section>

              <section>
                <h3>Best Time to Visit</h3>
                <p>{info.bestTime}</p>
              </section>

              <section>
                <h3>Visitor Tips</h3>
                <p>{info.tips}</p>
              </section>

              {/* BACK BUTTON */}
              <div className="modalActions">
                <button
                  type="button"
                  className="exploreButton"
                  onClick={() => setIsOpen(false)}
                >
                  ← Back
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}