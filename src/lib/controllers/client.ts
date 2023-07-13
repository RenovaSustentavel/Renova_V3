import { NextResponse } from "next/server";

import { prisma } from "@/lib/database/db";

export async function criarCliente(req: Request) {
  const { nome, celular } = await req.json();

  if (!nome || !celular)
    return NextResponse.json({ error: "Faltando Campos" }, { status: 400 });

  try {
    const novoCliente = await prisma.cliente.create({
      data: {
        nome: nome,
        celular: celular,
      },
    });
    return NextResponse.json(novoCliente, { status: 201 });
  } catch (error) {
    console.log(error);
    NextResponse.json({ error: "Erro ao criar cliente" }, { status: 500 });
  }
}

export async function getClientes(req: Request) {
  const { searchParams } = new URL(req.url);

  try {
    const clientes = await prisma.$transaction([
      prisma.cliente.findMany({
        where: {
          nome: {
            contains: searchParams.get("nome") || "",
          },
          celular: {
            contains: searchParams.get("celular") || "",
          },
          id: {
            equals: searchParams.get("id")
              ? parseInt(searchParams.get("id") as string)
              : undefined,
          },
        },
        take: parseInt(searchParams.get("take") as string) || undefined,
        skip: parseInt(searchParams.get("skip") as string) || undefined,
      }),
      prisma.cliente.count(),
    ]);
    return NextResponse.json(
      { clientes: clientes[0], count: clientes[1] },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    NextResponse.json({ error: "Erro ao buscar clientes" }, { status: 500 });
  }
}
