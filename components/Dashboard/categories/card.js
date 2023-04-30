import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useEffect, useState } from "react";
import { iconMap } from "./data";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const TypeCard = ({ type, count, amount }) => {
  const icon = Object.keys(iconMap).includes(type) ? <>{iconMap[type]}</> : ShoppingCartIcon;
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={2}>
            {icon}
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{ fontWeight: "bold" }} gutterBottom>
              {type}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {count} Payments
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
export default TypeCard;
