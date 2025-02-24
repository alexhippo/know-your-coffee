import classes from "./Cup.module.css";

type CupProps = {
  coffee: string;
};

const Cup: React.FC<CupProps> = ({ coffee }) => {
  let coffeeStyles = "";
  switch (coffee) {
    case "espresso":
      coffeeStyles = classes.espresso;
      break;
    case "long black":
      coffeeStyles = classes.longBlack;
      break;
    case "flat white":
      coffeeStyles = classes.flatWhite;
      break;
    case "americano":
      coffeeStyles = classes.americano;
      break;
    default:
      coffeeStyles = "";
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
