export default function Card(props) {
  return (
    <li className="card">
      <h2>{props.name}</h2>
      <p>{props.children}</p>
    </li>
  );
}
