import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Typography from "@mui/material/Typography";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useEffect, useState } from "react";
import { Spin } from "antd";
const TotalSpent = (props) => {
  const [amount, setAmount] = useState("");
  useEffect(() => {
    if (props.amount && !isNaN(props.amount)) {
      setAmount(props.amount);
    }
  }, [props.amount]);
  const title = "Total Payments";
  return (
    <Spin spinning={props.loading}>
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
    </Spin>
  );
};

export default TotalSpent;
