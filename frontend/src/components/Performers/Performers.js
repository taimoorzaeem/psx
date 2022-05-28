import React, { useEffect, useState } from "react";
import Classes from "./Performers.css";
import Table from "../../UI/Table/Table";
import axios from "axios";

const performers = (props) => {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/marketData")
      .then((res) => {
        const fetchData = res.data["marketData"].map((obj) => {
          const subset = (({ scrip, current, change, volume }) => ({
            scrip,
            current,
            change,
            volume,
          }))(obj);
          return subset;
        });

        setData(fetchData);
      })
      .catch((err) => {
        console.log("The data is not avaliable!");
      });
  }, []);

  return (
    <div id="Performers" className={Classes.body}>
      <h4>Performers</h4>
      <div className={Classes.tables}>
        <Table
          headings={["SYMBOL", "PRICE", "CHANGE", "VOLUME"]}
          data={data
            .sort((a, b) => {
              return parseInt(a.volume, 10) - parseInt(b.volume, 10);
              /*if (parseInt(a.volume) < parseInt(b.volume)) return -1;
              if (parseInt(a.volume) > parseInt(b.volume)) return 1;
              return 0;*/
            })
            .slice(-11, -1)}
          caption={"TOP ACTIVE STOCKS"}
        />
        <Table
          headings={["SYMBOL", "PRICE", "CHANGE", "VOLUME"]}
          data={data
            .sort((a, b) => {
              return parseInt(a.change, 10) - parseInt(b.change, 10);
              /*if (parseInt(a.change) < parseInt(b.change)) return -1;
              if (parseInt(a.change) > parseInt(b.change)) return 1;
              return 0;*/
            })
            .slice(0, 10)}
          caption={"TOP ADVANCERS"}
        />
        <Table
          headings={["SYMBOL", "PRICE", "CHANGE", "VOLUME"]}
          data={data
            .sort((a, b) => {
              return parseInt(a.change, 10) - parseInt(b.change, 10);
              /*if (parseInt(a.change) < parseInt(b.change)) return -1;
              if (parseInt(a.change) > parseInt(b.change)) return 1;
              return 0;*/
            })
            .slice(-11, -1)}
          caption={"TOP DECLINERS"}
        />
      </div>
    </div>
  );
};

export default performers;
