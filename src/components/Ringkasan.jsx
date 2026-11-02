function Ringkasan({ total, totalTamat, totalTayang }) {
  return (
    <section className="ringkasan">
      <div className="ringkasan-item">
        <strong>{total}</strong>
        <span>Total Serial</span>
      </div>
      <div className="ringkasan-item">
        <strong>{totalTamat}</strong>
        <span>Tamat</span>
      </div>
      <div className="ringkasan-item">
        <strong>{totalTayang}</strong>
        <span>Masih Tayang</span>
      </div>
    </section>
  );
}

export default Ringkasan;