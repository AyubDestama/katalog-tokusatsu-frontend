import { useState } from "react";
import Header from "./components/Header";
import Ringkasan from "./components/Ringkasan";
import FormTambah from "./components/FormTambah";
import DaftarSerial from "./components/DaftarSerial";

const dataAwal = [
  {
    id: 1,
    judul: "Kamen Rider Kuuga",
    tahun: 2000,
    genre: "Kamen Rider",
    jumlahEpisode: 49,
    status: "Tamat",
    sinopsis: "Yusuke Godai mendapat kekuatan Arcle dan melawan kaum Grongi.",
  },
  {
    id: 2,
    judul: "Kamen Rider Build",
    tahun: 2017,
    genre: "Kamen Rider",
    jumlahEpisode: 49,
    status: "Tamat",
    sinopsis: "Fisikawan Sento Kiryu bertarung memakai kekuatan Best Match.",
  },
  {
    id: 3,
    judul: "Himitsu Sentai Goranger",
    tahun: 1975,
    genre: "Super Sentai",
    jumlahEpisode: 84,
    status: "Tamat",
    sinopsis: "Lima pahlawan berkostum warna melawan organisasi kejahatan Black Cross.",
  },
  {
    id: 4,
    judul: "Kyoryu Sentai Zyuranger",
    tahun: 1992,
    genre: "Super Sentai",
    jumlahEpisode: 50,
    status: "Tamat",
    sinopsis: "Para ksatria dinosaurus bangkit untuk menghentikan Bandora.",
  },
  {
    id: 5,
    judul: "Ultraman",
    tahun: 1966,
    genre: "Ultraman",
    jumlahEpisode: 39,
    status: "Tamat",
    sinopsis: "Hayata dari Science Patrol menjadi raksasa perak pelindung Bumi.",
  },
];

function App() {
  const [daftarSerial, setDaftarSerial] = useState(dataAwal);

  const handleTambah = (serialBaru) => {
    setDaftarSerial([...daftarSerial, { ...serialBaru, id: Date.now() }]);
  };

  const total = daftarSerial.length;
  const totalTamat = daftarSerial.filter((s) => s.status === "Tamat").length;
  const totalTayang = total - totalTamat;

  return (
    <div className="container">
      <Header
        judul="Katalog Tokusatsu"
        subjudul="Kumpulan serial Kamen Rider, Super Sentai, dan Ultraman"
      />
      <Ringkasan total={total} totalTamat={totalTamat} totalTayang={totalTayang} />
      <FormTambah onTambah={handleTambah} />
      <DaftarSerial daftar={daftarSerial} />
    </div>
  );
}

export default App;