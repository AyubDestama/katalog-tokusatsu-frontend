import { useState } from "react";

const formAwal = {
  judul: "",
  tahun: "",
  genre: "Kamen Rider",
  jumlahEpisode: "",
  status: "Tamat",
  sinopsis: "",
};

function FormTambah({ onTambah }) {
  const [form, setForm] = useState(formAwal);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.judul.trim() === "") {
      alert("Judul serial wajib diisi!");
      return;
    }

    onTambah({
      ...form,
      judul: form.judul.trim(),
      tahun: Number(form.tahun),
      jumlahEpisode: Number(form.jumlahEpisode),
    });

    setForm(formAwal);
  };

  return (
    <form className="form-tambah" onSubmit={handleSubmit}>
      <h2>Tambah Serial</h2>
      <input
        type="text"
        name="judul"
        placeholder="Judul serial"
        value={form.judul}
        onChange={handleChange}
      />
      <input
        type="number"
        name="tahun"
        placeholder="Tahun rilis"
        value={form.tahun}
        onChange={handleChange}
      />
      <select name="genre" value={form.genre} onChange={handleChange}>
        <option>Kamen Rider</option>
        <option>Super Sentai</option>
        <option>Ultraman</option>
      </select>
      <input
        type="number"
        name="jumlahEpisode"
        placeholder="Jumlah episode"
        value={form.jumlahEpisode}
        onChange={handleChange}
      />
      <select name="status" value={form.status} onChange={handleChange}>
        <option>Tamat</option>
        <option>Tayang</option>
      </select>
      <input
        type="text"
        name="sinopsis"
        placeholder="Sinopsis singkat"
        value={form.sinopsis}
        onChange={handleChange}
      />
      <button type="submit">Tambah</button>
    </form>
  );
}

export default FormTambah;