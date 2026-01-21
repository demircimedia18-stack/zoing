import React, { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleReset = () => {
    alert(`Şifre sıfırlama linki gönderildi: ${email}`);
  };

  return (
    <div className="container">
      <h2>Şifremi Unuttum</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <button onClick={handleReset}>Gönder</button>
      <p><a href="/login">Giriş Yap</a></p>
    </div>
  );
}
