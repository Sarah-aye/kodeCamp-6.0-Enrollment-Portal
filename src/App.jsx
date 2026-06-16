import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";
import StatusMessage from "./components/StatusMessage";
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

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        setLoading(true);
        const respond = await axios.get(
          "https://randomuser.me/api/?results=6&nat=us,gb",
        );

        const data = respond.data.results;

        const filteredData = data.map((student) => ({
          id: student.login.uuid,
          firstName: student.name.first,
          lastName: student.name.last,
          email: student.email,
          avatar: student.picture.thumbnail,
          score: Math.floor(Math.random() * 61) + 40,
          track: TRACKS[Math.floor(Math.random() * TRACKS.length)],
        }));

        console.log(filteredData);

        setStudents([...filteredData, ...SEED_STUDENTS]);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchAPI();
  }, []);

  const averageScore =
    students.length > 0
      ? (
          students.reduce((sum, student) => sum + student.score, 0) /
          students.length
        ).toFixed(1)
      : 0;

  return (
    <div>
      {loading && <StatusMessage type="loading" />}
      {error !== null && <StatusMessage type="error" />}
      <Header students={students} averageScore={averageScore} />
    </div>
  );
}

export default App;
