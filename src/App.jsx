import "./App.css";
import Header from "./components/Header";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import axios from "axios";
import StatusMessage from "./components/StatusMessage";
import EnrollForm from "./components/EnrollForm";
import StudentList from "./components/StudentList";
import ClassButton from "./components/ClassButton";

import { Route, Routes } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EnrollPage from "./pages/EnrollPage";
import StudentDetailPage from "./pages/StudentDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import MainLayout from "./pages/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./pages/LoginPage";

// important for navigating back to the previous location on the last page.

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

  // to be used in the enroll function.
  const navigate = useNavigate();
  const location = useLocation();

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

    // navigate to home only if enroll is from the EnrollPage to prevent reload when enrolling from the home page.

    if (location.pathname === "/enroll") {
      navigate("/");
    }
  };

  return (
    <div>
      <Routes>
        <Route
          element={
            <MainLayout students={students} averageScore={averageScore} />
          }
        >
          <Route
            path="/"
            element={
              <HomePage
                tracks={TRACKS}
                onEnroll={onEnroll}
                onclick={fetchAPI}
                students={students}
                averageScore={averageScore}
                title
                type
              />
            }
          >
            Home
          </Route>

          <Route
            path="/students/:id"
            element={<StudentDetailPage students={students} />}
          >
            Student Details
          </Route>

          <Route path="*" element={<NotFoundPage />}></Route>
          <Route
            path="/enroll"
            element={
              <ProtectedRoute>
                <EnrollPage tracks={TRACKS} onEnroll={onEnroll} title />
              </ProtectedRoute>
            }
          />

          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
