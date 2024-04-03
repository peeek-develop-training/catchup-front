"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  item: yup.string().required("タスクを入力してください"),
});

type Props = {
  params: {
    id: number;
  };
};

type Input = yup.InferType<typeof schema>;

type SubmitData = {
  id: number;
} & Input;

const ItemPage: FC<Props> = (props) => {
  const [submitData, setSubmitData] = useState<SubmitData>({
    id: props.params.id,
    item: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({
    resolver: yupResolver(schema),
  });

  const onsubmit = handleSubmit((data) => {
    setSubmitData((prev) => ({ ...prev, item: data.item }));
    console.log(submitData);
  });

  return (
    <div>
      <form onSubmit={onsubmit}>
        <input type="text" {...register("item")} />
        <button type="submit">送信</button>
        {errors.item && <p>{errors.item.message}</p>}
      </form>
    </div>
  );
};

export default ItemPage;
