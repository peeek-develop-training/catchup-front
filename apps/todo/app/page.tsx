"use client";

import { FC, useState } from "react";
import { useForm } from "react-hook-form";

type Input = {
  item: string;
};

type Todo = {
  id: number | null;
  item: string;
};

const TodoPage: FC = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const { register, handleSubmit, reset } = useForm<Input>();

  const onSubmit = handleSubmit((data) => {
    setTodoList(() => [...todoList, { id: todoList.length, item: data.item }]);
    reset();
  });

  const onDelete = (id: number) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="新しいタスクを入力してください"
          {...register("item", { required: true })}
        />
        <button type="submit">追加</button>
      </form>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <p>{todo.item}</p>
            <a>編集</a>
            <button onClick={() => onDelete(todo.id!)}>完了</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoPage;
