export default function Cards({ icon, title, subtitle, description }) {
  return (
    <div className="card">
      <img className="card-icon" src={icon} alt="icon" height="96px" />
      <p className="card-title">{title}</p>
      <h3 className="card-subtitle">{subtitle}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
}
