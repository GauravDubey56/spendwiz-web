import SpendCard from "./spendCard";
import { data } from "./data";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
const SpendList = (props) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    if (!list.length) {
      setList(Array.isArray(props.list) ? props.list : data);
    }
  }, []);
  return (
    <Grid container rowSpacing={2}>
      {list.map((payment, key) => {
        return (
          <>
            {" "}
            <Grid item xs={12}>
              {" "}
              <SpendCard {...payment} />{" "}
            </Grid>
            <br />
          </>
        );
      })}
    </Grid>
  );
};

export default SpendList;
