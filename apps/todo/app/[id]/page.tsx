"use client";

import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Props = {
  params: {
    id: string;
  };
};

type Input = {
  item: string;
};

const ItemPage: FC<Props> = (props) => {
  const { register, handleSubmit } = useForm<Input>();

  const onsubmit: SubmitHandler<Input> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <input type="text" {...register("item")} />
        <button type="submit">送信</button>
      </form>
    </div>
  );
};

export default ItemPage;
