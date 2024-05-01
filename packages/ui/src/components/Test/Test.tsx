import { FC } from "react";
import styles from "./Test.module.css";

type Props = {
  /**
   * text
   */
  text: string;
};

export const Test: FC<Props> = (props) => {
  const { text } = props;

  return <h1 className={styles.heading1}>{text}</h1>;
};
