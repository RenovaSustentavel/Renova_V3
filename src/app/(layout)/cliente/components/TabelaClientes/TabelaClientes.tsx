import { Table } from "@/lib/bootstrap";
import "./style.css";

export default function TabelaClientes(props: {
  clientes: {
    count: number;
    clientes: { id: number; nome: string; celular: string }[];
  };
}) {
  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Celular</th>
        </tr>
      </thead>
      <tbody>
        {props.clientes.clientes.map((cliente) => (
          <tr key={cliente.id}>
            <td>{cliente.id}</td>
            <td>{cliente.nome}</td>
            <td>{cliente.celular}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
