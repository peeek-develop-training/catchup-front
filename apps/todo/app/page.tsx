"use client";

import Link from "next/link";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  item: yup.string().required("新しいタスクを入力してください"),
});

type Input = yup.InferType<typeof schema>;

type Todo = {
  id: number;
} & Input;

const TodoPage: FC = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Input>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    setTodoList((prev) => [...prev, { id: prev.length, item: data.item }]);
    reset();
  });

  const onDelete = (id: Todo["id"]) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="新しいタスクを入力してください"
          {...register("item")}
        />
        <button type="submit">追加</button>
        {errors.item && <p>{errors.item.message}</p>}
      </form>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <p>{todo.item}</p>
            <Link href={`/${todo.id}`}>詳細</Link>
            <button onClick={() => onDelete(todo.id)}>完了</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoPage;
