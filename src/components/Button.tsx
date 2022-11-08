import styles from "./Button.module.css";

type propType = {
  color: string;
  text: string;
  size: "sm" | "md" | "lg";
};

const scaleObj = {
  sm: 0.75,
  md: 1,
  lg: 1.25,
};

const Button = ({ color, text, size }: propType): JSX.Element => {
  let scale = 1;
  if (size === "sm") {
    scale = 0.75;
  } else if (size === "lg") {
    scale = 1.25;
  }
  return (
    <div>
      <button
        type="button"
        className={styles.mainBtn}
        style={{
          backgroundColor: color,
          padding: `${scale * 0.5}rem  ${scale * 1.25}rem`,
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
