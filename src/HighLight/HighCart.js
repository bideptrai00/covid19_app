import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  wrapper: (props) => {
    if (props.type === "confirmed") return { borderLeft: "5px solid #c9302c" };
    if (props.type === "active") return { borderLeft: "5px solid green" };
    else return { borderLeft: "5px solid gray" };
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
  },
  count: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});

function HighCart({ title, count, type }) {
  const styles = useStyle({ type });

  return (
    <Card className={styles.wrapper}>
      <CardContent>
        <Typography variant="body2" component="h2" className={styles.title}>
          {title}
        </Typography>
        <Typography variant="body2" component="span" className={styles.count}>
          {count}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default HighCart;
