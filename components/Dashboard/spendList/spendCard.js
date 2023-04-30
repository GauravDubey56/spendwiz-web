import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useEffect, useState } from "react";
import moment from "moment";
const SpendCard = ({ type, description, amount, createdAt }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={8}>
            <Typography sx={{ fontWeight: "bold" }} gutterBottom>
              {type}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {moment(createdAt).format("DD MMM hh:mm a")}
            </Typography>
          </Grid>
          <Grid item xs={4} textAlign="right">
            <Typography sx={{ fontWeight: "bold" }} gutterBottom>
              <CurrencyRupeeIcon />
              {amount}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default SpendCard