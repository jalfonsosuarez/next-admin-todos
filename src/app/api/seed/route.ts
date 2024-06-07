import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  await prisma.todo.deleteMany();

  const todo = await prisma.todo.createMany({
    data: [
      {
        description: "Cerveza fria",
        complete: true,
      },
      {
        description: "Pan caliente",
      },
      {
        description: "Cebollas",
      },
      {
        description: "Ajos",
      },
      {
        description: "Pimientos",
      },
    ],
  });

  console.log(todo);

  return NextResponse.json({ message: "Seed Executed" });
}
