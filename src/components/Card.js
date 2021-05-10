import {
  Card,
  Typography,
  Box,
  CardContent,
  Grid,
  makeStyles
} from "@material-ui/core";
import Countup from "react-countup";

const useStyle = makeStyles({
  header: {
    background: "#f5f5f5",
    padding: 10
  },
  container: {}
});
const CardComponent = ({ cardTitle, value, desc, lastUpdate }) => {
  const classes = useStyle();
  return (
    <Grid
      component={Card}
      style={{ margin: 20, borderBottom: "1px solid yelow" }}
    >
      <Box className={classes.header}>
        <Typography variant="h5" color="textSecondary">
          {cardTitle}
        </Typography>
      </Box>
      <CardContent>
        <Typography variant="h5">
          <Countup start={0} end={value} duration={3} separator="," />
        </Typography>
        <Typography color="textSecondary">{desc} </Typography>
        <Typography>{new Date(lastUpdate).toDateString()} </Typography>
      </CardContent>
    </Grid>
  );
};

export default CardComponent;
