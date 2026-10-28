function ServiceCard({ icon, title, description }) {
  return (
    <div className="card">
      <div className="box">
        <span className="material-symbols-sharp">{icon}</span>
        <div className="text ser-text">{title}</div>
        <p className="ser-text">{description}</p>
      </div>
    </div>
  );
}