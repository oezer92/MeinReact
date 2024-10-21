//Sie nimmt drei props entgegen, und rendert eine Liste mit den drei Werten.
export default function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}