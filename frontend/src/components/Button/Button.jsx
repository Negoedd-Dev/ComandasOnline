import "./Button.css";

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disable = false,
}) {
  return (
    <button
      classNeme={`btn btn-${varint}`}
      type={type}
      onClick={onClick}
      disable={disable}
    >
      {children}
    </button>
  );
}
