import * as React from "react";
import { hot } from "react-hot-loader/root";

import Button from "./button.js";
import * as styles from "./app.css";
import * as theme from "./theme.css";

const App = () => {
  const [currentTheme, setCurrentTheme] = React.useState("light");
  return (
    <div className={theme[currentTheme]}>
      <Button
        kind="primary"
        onClick={() => {
          const newTheme = currentTheme === "light" ? "dark" : "light";
          setCurrentTheme(newTheme);
        }}
      >
        Change theme
      </Button>
      <Button kind="secondary">secondary</Button>
      <div className={styles.app}>
        <h1> Hello, World! juan </h1>
      </div>
    </div>
  );
};

export default hot(App);
