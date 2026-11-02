import KartuSerial from "./KartuSerial";

function DaftarSerial({ daftar }) {
  if (daftar.length === 0) {
    return <p className="kosong">Belum ada data Serial</p>;
  }

  return (
    <section className="daftar">
      {daftar.map((serial) => (
        <KartuSerial
          key={serial.id}
          judul={serial.judul}
          tahun={serial.tahun}
          genre={serial.genre}
          jumlahEpisode={serial.jumlahEpisode}
          status={serial.status}
          sinopsis={serial.sinopsis}
        />
      ))}
    </section>
  );
}

export default DaftarSerial;