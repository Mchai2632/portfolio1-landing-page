import Cards from "../components/Cards";
import { developmentIntegrationCards } from "../constants/cardData";

export default function DevelopmentIntegration() {
  return (
    <section className="section1" id="development-integration">
      <h1>Development & Integration</h1>
      <p>
        Our development and integration services cater to organisations looking
        at digital transformation and Industry 4.0. Let’s work together to
        realise your business goals today.
      </p>
      <div className="card-container">
        {developmentIntegrationCards.map((card, index) => {
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
