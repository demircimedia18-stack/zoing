import React, { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    alert(`Kayıt denendi: ${username}`);
  };

  return (
    <div className="container">
      <h2>Zoing Register</h2>
      <input placeholder="Kullanıcı adı" value={username} onChange={e => setUsername(e.target.value)} />
      <input placeholder="Şifre" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Kayıt Ol</button>
      <p><a href="/login">Giriş Yap</a></p>
    </div>
  );
}
