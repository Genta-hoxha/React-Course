export default function Home(props) {
  // Todo: Build this component!

  // !!! Important:
  // Wrap the icon with a <span className="button-icon"> to achieve the target look

  return (
    <button {...props} className={`${props.mode}-button`}>
      {props.children}
    </button>
  );
}
