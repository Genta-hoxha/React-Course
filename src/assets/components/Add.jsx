export default function Add(props) {
  return (
    <button {...props} className={`${props.mode}-button`}>
      {props.children}
    </button>
  );
}
