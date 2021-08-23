import { useEffect, useState } from "react";
import { funds } from "./funds";
import "./styles.css";

const options = {
  method: "GET",

  headers: {
    "x-rapidapi-key": "a6458fa3d6msh82c3d188d32aa59p1ac2dbjsn2e12a6a5a3a2",
    "x-rapidapi-host": "latest-mutual-fund-nav.p.rapidapi.com"
  }
};

export default function App() {
  const [mfsData, setMfsData] = useState([]);

  // useEffect(() => {
  //   for (let i = 0; i < funds.length; i++) {
  //     for (let j = 0; j < funds[0].fundNames.length; j++) {
  //       const url = `https://latest-mutual-fund-nav.p.rapidapi.com/fetchHistoricalNAV?Date=21-Aug-2021&&SchemeName=Axis Bluechip Fund - Direct Plan - Growth`;
  //       (async () => {
  //         const data = await fetch(url, options);
  //         const jsondata = await data.json();
  //         console.log(jsondata);
  //         setMfsData((prevData) => [...prevData, ...jsondata]);
  //       })();
  //     }
  //   }
  // }, []);
  // useEffect(() => {
  //   for (let i = 0; i < funds.length; i++) {
  //     for (let j = 0; j < funds[0].fundNames.length; j++) {
  //       const url = `https://latest-mutual-fund-nav.p.rapidapi.com/fetchLatestNAV?SchemeType=Open Ended Schemes&&SchemeName=${funds[i].fundNames[j]}`;
  //       (async () => {
  //         const data = await fetch(url, options);
  //         const jsondata = await data.json();
  //         setMfsData((prevData) => [...prevData, ...jsondata]);
  //       })();
  //     }
  //   }
  // }, []);
  console.log(mfsData);
  return (
    <div className="App">
      <table>
        <tr>
          <th>Fund</th>
          <th>Current Nav</th>
          <th>Date</th>
        </tr>
        {mfsData.map((mf) => (
          <>
            <tr>
              <td>{mf["Scheme Name"]}</td>
              <td>{mf["Net Asset Value"]}</td>
              <td>{mf["Date"]}</td>
            </tr>
          </>
        ))}
      </table>

      {mfsData.length === 0 && "Loading..."}
    </div>
  );
}
