import { Todo } from "@prisma/client";

export const updateTodo = async (
  id: string,
  complete: boolean
): Promise<Todo | void> => {
  try {
    const body = { complete: complete };

    const todo = await fetch(`/api/todos/${id}`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    return todo;
  } catch (error) {
    console.log(error);
  }
};

export const createTodo = async (description: string): Promise<Todo | void> => {
  try {
    const body = { description };

    const todo = await fetch(`/api/todos`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    return todo;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCompletedTodos = async (): Promise<boolean> => {
  try {
    const todo = await fetch(`/api/todos`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
