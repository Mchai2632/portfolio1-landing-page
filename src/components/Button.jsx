export default function Button({
  children,
  variant = "primary",
  onClick,
  ...props
}) {
  const variants = {
    primary: {
      backgroundColor: "#0F4AB2",
      color: "#FFFFFF",
    },

    outline: {
      color: "#0F4AB2",
      border: "2px solid #0F4AB2",
    },

    disabled: {
      backgroundColor: "#0F4AB250",
      color: "#FFFFFF",
      cursor: "not-allowed",
    },
  };

  if (props.disabled) {
    variant = "disabled";
  }

  const combineStyle = {
    ...(variant ? variants[variant] : variant),
  };

  return (
    <button style={combineStyle} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
