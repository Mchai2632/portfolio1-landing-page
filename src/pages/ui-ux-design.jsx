import Cards from "../components/Cards";
import { uiUxDesignCards } from "../constants/cardData";

export default function UiUxDesign() {
  return (
    <section className="section2" id="ui-ux-design">
      <h1>UI & UX Design</h1>
      <p>
        We bring value to your business by producing seamless, multi-platform
        digital experiences that result in strong, meaningful user engagements.
        Read more about our services below.
      </p>
      <div className="card-container">
        {uiUxDesignCards.map((card, index) => {
          return (
            <Cards
              key={index}
              icon={card.icon}
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
            />
          );
        })}
      </div>
    </section>
  );
}
