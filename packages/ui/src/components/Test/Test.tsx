import { FC } from "react";

type Props = {
  /**
   * text
   */
  text: string;
};

export const Test: FC<Props> = (props) => {
  const { text } = props;

  return <h1>{text}</h1>;
};
