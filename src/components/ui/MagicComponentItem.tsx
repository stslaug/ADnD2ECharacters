export default function MagicComponentItem({ component, quantity }) {
    return (
      <div style={{ display: "flex", gap: "10px", marginBottom: "5px" }}>
        <span style={{ minWidth: "15rem" }}>{component}</span>
        <span>{quantity}</span>
      </div>
    );
  };