import classes from "./Cup.module.css";

type CupProps = {
  coffee: string;
};

const Cup: React.FC<CupProps> = ({ coffee }) => {
  let coffeeStyles = "";
  if (coffee === "long black") {
    coffeeStyles = classes.longBlack;
  } else if (coffee === "flat white") {
    coffeeStyles = classes.flatWhite;
  }

  return (
    <div className={classes.canvas}>
      <div className={classes.cup}>
        <div className={`${classes.coffee} ${coffeeStyles}`}></div>
      </div>
    </div>
  );
};

export default Cup;
