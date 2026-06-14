import "./App.css";
import Header from "./components/Header";

function App() {
  const TRACKS = ["Frontend", "Backend", "Mobile", "Data"];

  const SEED_STUDENTS = [
    {
      id: "seed-1",
      firstName: "Amara",
      lastName: "Johnson",
      email: "amara@kodecamp.dev",
      track: "Frontend",
      score: 92,
      isActive: true,
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: "seed-2",
      firstName: "Chidi",
      lastName: "Okafor",
      email: "chidi@kodecamp.dev",
      track: "Backend",
      score: 67,
      isActive: false,
      avatar: "https://i.pravatar.cc/150?img=3",
    },
  ];

  const scoreTotal = SEED_STUDENTS.flatMap((s) => s.score);
  const red = scoreTotal.reduce((acc, s) => acc + s, 0);

  const averageScore = (red / scoreTotal.length).toFixed(1);
  // console.log(`${scoreTotal}, ${red}, ${averageScore}`);

  return (
    <div>
      <Header students={SEED_STUDENTS} averageScore={averageScore} />
    </div>
  );
}

export default App;
