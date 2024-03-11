export default function Card({ image, title, subtitle }) {
  return (
    <figure className="card">
      <div className="card__ct">
        <img src={image} alt={title} className="card__image" />
      </div>
      <figcaption className="card__desc">
        <h2 className="card__title">{title}</h2>
        <h3 className="card__work">{subtitle}</h3>
      </figcaption>
    </figure>
  );
}
