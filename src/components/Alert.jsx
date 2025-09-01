import Button from "./Button";

export default function Alert({ show, title, message, onClose }) {
  if (!show) return null;

  return (
    <div className="alert-overlay" onClick={onClose}>
      <div className="alert-box">
        <p style={{ fontSize: "15px" }}>{title}</p>
        <p className="alert-message" style={{ fontSize: "13px" }}>
          {message}
        </p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
}
