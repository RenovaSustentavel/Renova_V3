import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function useFriendStatus() {
  const searchParams = useSearchParams();
  const [clientes, setClientes] = useState({ count: 0, clientes: [] });

  useEffect(() => {
    const createURL = () => {
      let url = "/api/cliente?";
      url = searchParams.has("nome")
        ? url.concat(`nome=${searchParams.get("nome")}`)
        : url;
      url = searchParams.has("celular")
        ? url.concat(`celular=${searchParams.get("celular")}`)
        : url;
      url = searchParams.has("id")
        ? url.concat(`id=${searchParams.get("id")}`)
        : url;
      return url;
    };

    const fetchClientes = () => {
      fetch(createURL(), {
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          if (!data.error) setClientes(data);
        });
    };
    fetchClientes();
  }, []);

  return clientes;
}
