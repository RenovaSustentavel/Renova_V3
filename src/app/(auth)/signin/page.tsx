"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import style from "./style.module.css";

export default function Page() {
  const [usuario, setUsuario] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  const { push } = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usuario, senha }),
    }).then((res) => {
      if (res.status === 200) {
        push("/");
      }
    });
  };

  return (
    <main className={style.main}>
      <div>
        <div className={style.container}>
          <img className={style.img} src="/img/logo.jpg" alt="Logo" />
        </div>
        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.formField}>
            <input
              className={style.input}
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              type="text"
              placeholder="Usuário"
              required
            />
          </div>

          <div className={style.formField}>
            <input
              className={style.input}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              type="password"
              placeholder="Senha"
              required
            />{" "}
          </div>

          <div className={style.formField}>
            <button className={style.btn} type="submit">
              Log in
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
