"use client";

import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  item: yup.string().required("新しいタスクを入力してください"),
});

type Input = yup.InferType<typeof schema>;

type Todo = {
  id: number | null;
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
          {...register("item")}
        />
        <button type="submit">追加</button>
        {errors.item && <p>{errors.item.message}</p>}
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
