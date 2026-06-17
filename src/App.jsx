import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";
import StatusMessage from "./components/StatusMessage";
import EnrollForm from "./components/EnrollForm";
import StudentList from "./components/StudentList";
import ClassButton from "./components/ClassButton";
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAPI = async () => {
    try {
      setLoading(true);
      const respond = await axios.get(
        "https://randomuser.me/api/?results=6&nat=us,gb",
      );

      setLoading(false);
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

  useEffect(() => {
    fetchAPI();
  }, []);

  const averageScore =
    students.length > 0
      ? (
          students.reduce((sum, student) => sum + student.score, 0) /
          students.length
        ).toFixed(1)
      : 0;

  const onEnroll = (newStudent) => {
    setStudents((prev) => [...prev, newStudent]);
  };

  return (
    <div>
      <Header students={students} averageScore={averageScore} />
      <br />
      <EnrollForm
        tracks={TRACKS}
        onEnroll={onEnroll}
        title="Enroll New Student"
      />
      <br />
      {loading && <StatusMessage type="loading" />}
      {error && <StatusMessage type="error" />}

      <StudentList students={students} title="Student Roster">
        <div>
          <br />
          <footer>{`End of Roster - ${students.length} total`}</footer>
          <br />
          <ClassButton title="Refresh" onclick={fetchAPI} />
        </div>
      </StudentList>
      <br />
    </div>
  );
}

export default App;
