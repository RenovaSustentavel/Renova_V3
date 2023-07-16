"use client";
import TabelaClientes from "@/app/(layout)/cliente/components/TabelaClientes/TabelaClientes";
import useClientes from "./lib/useClientes";
import styles from "./style.module.css";

export default function Clientes() {
  const clientes = useClientes();

  return (
    <main className={styles.main}>
      <TabelaClientes clientes={clientes} />
    </main>
  );
}
