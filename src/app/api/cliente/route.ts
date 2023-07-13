import { criarCliente, getClientes } from "@/lib/controllers/client";

export async function POST(req: Request) {
  return await criarCliente(req);
}

export async function GET(req: Request) {
  return await getClientes(req);
}
