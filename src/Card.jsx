function Card({ title, description, link, icon: Icon }) {
  return (
    <div className="card">
      {Icon && <Icon size={28} style={{ color: '#007bff', marginBottom: '8px' }} />}
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={() => window.open(link, "_blank")}>
        Visit Site 🌍
      </button>
    </div>
  );
}

export default Card;
