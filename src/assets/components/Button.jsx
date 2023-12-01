export default function Button(props) {
  return (
    <button {...props} className={`${props.mode}-button`}>
      {props.children}
    </button>
  );
}
