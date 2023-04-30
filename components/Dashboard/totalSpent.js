import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Typography from "@mui/material/Typography";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useEffect, useState } from "react";

const TotalSpent = (props) => {
  const [amount, setAmount] = useState(1000);
  useEffect(() => {
    if (props.totalAmount && !isNaN(props.totalAmount)) {
      setAmount(props.totalAmount);
    }
  }, [props.totalAmount]);
  const title = "Total Payments";
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="h2" component="div">
            <CurrencyRupeeIcon />
          {amount}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TotalSpent;