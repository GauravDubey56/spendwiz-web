import SpendCard from "./spendCard";
import { data } from "./data";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Spin } from "antd";
const SpendList = (props) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    if (!list.length && props.list && props.list.length) {
      setList(props.list);
    }
  }, [props.list]);
  return (
    <Spin spinning={props.loading}>
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
    </Spin>
  );
};

export default SpendList;
