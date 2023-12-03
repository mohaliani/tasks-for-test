import { useState } from "react";
import "./Home.css";
import BarChart from "../../Components/BarChart";
import LineChart from "../../Components/LineChart";
import PieChart from "../../Components/PieChart";
import { UserData } from "../../Data";

function Home() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <>
    <h1>Charts</h1>
    <div className="Home">
      <div className="chartContainer">
        <div className="chartItem">
          <BarChart chartData={userData} />
        </div>
        <div className="chartItem">
          <LineChart chartData={userData} />
        </div>
        <div className="chartItem">
          <PieChart chartData={userData} />
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
