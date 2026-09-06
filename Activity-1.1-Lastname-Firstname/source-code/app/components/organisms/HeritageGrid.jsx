import HeritageCard from "../molecules/HeritageCard";

const sites = [
  {
    title: "Hundred Islands",
    description:
      "A landmark island group in Alaminos, Pangasinan, known for its distinctive limestone formations and beautiful coastal scenery.",
    image: "/hundred-islands.jpeg",
  },
  {
    title: "Bolinao Lighthouse",
    description:
      "A historic coastal landmark overlooking the sea in Bolinao, Pangasinan, known for its scenic view and cultural significance.",
    image: "/bolinao-lighthouse.jpg",
  },
  {
    title: "Balungao Hot Spring",
    description:
      "A natural attraction in Balungao, Pangasinan associated with relaxing hot spring experiences and beautiful surroundings.",
    image: "/balungao-hot-spring.webp",
  },
];

export default function HeritageGrid() {
  return (
    <section
      id="heritage"
      className="section"
      aria-labelledby="heritage-title"
    >
      <h2 id="heritage-title" className="heritage-title">
        Featured heritage destinations
      </h2>

      <div className="grid">
        {sites.map((site) => (
          <HeritageCard
            key={site.title}
            title={site.title}
            description={site.description}
            image={site.image}
          />
        ))}
      </div>
    </section>
  );
}