import React from "react";
import "./css/app.css";
import PlayerCard from "./components/preview";

// prop-it-up & putting-it-together demo but slightly different

function App() {
  // if we wanted to use a loop to display the PlayerCard component...
  const profileData = [
    {
      firstName: "Giannis",
      lastName: "Antetokounmpo",
      username: "Giannis Antetokounmpo",
      imgUrl:
        "https://nbatopshot.com/cdn-cgi/image/width=582/https://assets.nbatopshot.com/editions/1_from_the_top_legendary/51f4281b-a87f-47bc-ba21-eec09f1a7730/play_51f4281b-a87f-47bc-ba21-eec09f1a7730_1_from_the_top_legendary_capture_Hero_2880_2880_Black.jpg",
      pointCount: 0,
      age: 24,
      bio: "Pick 15, Round 1",
    },
    {
      firstName: "Steph",
      lastName: "Curry",
      imgUrl:
        "https://nbatopshot.com/cdn-cgi/image/width=582/https://assets.nbatopshot.com/editions/1_from_the_top_legendary/f552b506-b41d-4e7c-ac5a-59427f9e96e6/play_f552b506-b41d-4e7c-ac5a-59427f9e96e6_1_from_the_top_legendary_capture_Hero_2880_2880_Black.jpg",
      pointCount: 0,
      age: 31,
      bio: "Pick 7, Round 1",
    },
  ];

  return (
    <div className="App">
      {/* <PlayerCard
        firstName="Nice"
        lastName="Guy"
        imgUrl="https://m.media-amazon.com/images/I/91VIl9sAfRL._SS500_.jpg"
        pointCount={0}
        age="24"
        bio="Finishes Last, but I deserve to be first because I'm a nice guy, I promise!"
      />
      <PlayerCard
        firstName="Yaas"
        lastName="Queen"
        imgUrl="https://www.biography.com/.image/t_share/MTE1ODA0OTcxNjIzMzUxODIx/queen-elizabeth-ii-9286165-1-402.jpg"
        pointCount={14}
        age="31"
        bio="YaaAaaAaaAs queen."
      /> */}

      {profileData.map((data, idx) => {
        return (
          <PlayerCard
            key={idx}
            firstName={data.firstName}
            lastName={data.lastName}
            imgUrl={data.imgUrl}
            pointCount={data.pointCount}
            age={data.age}
            bio={data.bio}
          />
        );
      })}
    </div>
  );
}

export default App;
