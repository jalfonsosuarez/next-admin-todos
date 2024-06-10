"use server";

import { Todo } from "@prisma/client";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const toggleTodo = async (
  id: string,
  complete: boolean
): Promise<Todo> => {
  const todo = await prisma.todo.findFirst({ where: { id } });

  if (!todo) {
    throw `Todo con id ${id} no encontrado`;
  }

  const updateTodo = await prisma.todo.update({
    where: { id },
    data: { complete },
  });

  revalidatePath("dashboar/server/todo");
  return updateTodo;
};

export const addTodo = async (description: string): Promise<Todo | any> => {
  try {
    const todo = await prisma.todo.create({ data: { description } });
    revalidatePath("dashboar/server/todo");
    return todo;
  } catch (error) {
    return { message: "Error creanto Todo" };
  }
};

export const deleteCompleted = async (): Promise<void | any> => {
  try {
    const todo = await prisma.todo.deleteMany({ where: { complete: true } });
    revalidatePath("dashboar/server/todo");
  } catch (error) {
    return { message: "Error eliminando Todos" };
  }
};
