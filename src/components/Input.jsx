export default function Input({
  type = "text",
  name,
  id,
  placeholder,
  value,
  onChange,
  className,
  ...props
}) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      className={className}
      onChange={onChange}
      placeholder={placeholder}
      {...props}
    />
  );
}
