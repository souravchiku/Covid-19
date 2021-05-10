import { Typography, Box, CardContent, Grid } from "@material-ui/core";
const Card = ({ cardTitle, value, desc, lastUpdate }) => {
  return (
    <Grid>
      <Box>
        <Typography variant="h5" color="textSecondary">
          {cardTitle}
        </Typography>
      </Box>
      <CardContent></CardContent>
    </Grid>
  );
};

export default Card;
