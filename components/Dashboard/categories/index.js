import TypeCard from "./card";
import { data } from "./data";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
const Categories = (props) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    if (!list.length) {
      setList(Array.isArray(props.list) ? props.list : data);
    }
  }, []);
  return (
    <Grid container rowSpacing={2}>
      {list.map((category, key) => {
        return (
          <>
            {" "}
            <Grid item xs={12}>
              {" "}
              <TypeCard {...category} key={key} />{" "}
            </Grid>
            <br />
          </>
        );
      })}
    </Grid>
  );
};

export default Categories;
