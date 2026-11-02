function KartuSerial({ judul, tahun, genre, jumlahEpisode, status, sinopsis }) {
  return (
    <article className="kartu">
      <span className="badge">{genre}</span>
      <h3>{judul}</h3>
      <p className="meta">
        {tahun} • {jumlahEpisode} episode • {status}
      </p>
      <p className="sinopsis">{sinopsis}</p>
    </article>
  );
}

export default KartuSerial;