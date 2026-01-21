import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert(`Giriş denendi: ${username}`);
  };

  return (
    <div className="container">
      <h2>Zoing Login</h2>
      <input placeholder="Kullanıcı adı" value={username} onChange={e => setUsername(e.target.value)} />
      <input placeholder="Şifre" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Giriş Yap</button>
      <p><a href="/register">Kayıt Ol</a> | <a href="/forgot-password">Şifremi Unuttum</a></p>
    </div>
  );
}
