import './App.css';
import Signin from './components/Signin'; 
import Login from './components/Login';
import First from './components/Firstpage';
import Welcome from './components/Welcome';
import Todo from './components/Todo';
import Calendar from './components/Calendar';
import Settings from './components/Settings';
import Repport from './components/Repport';
import DailyNotes from './components/DailyNotes';
import Notifications from './components/Notifications';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Support from './components/Support';
import ProjectsList from './components/ProjectsList';
import React, { useState, useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const route = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/Todo",
      element: <Todo />,
    },
    {
      path: "/ProjectsList",
      element: <ProjectsList setTasks={setTasks} tasks={tasks} />,
    },
    {
      path: "/support",
      element: <Support />,
    },
    {
      path: "/notifications",
      element: <Notifications />,
    },
    {
      path: "/welcome",
      element: <Welcome tasks={tasks} />,  // Pass tasks to Welcome component
    },
    {
      path: "/",
      element: <First />,
    },
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/calendar",
      element: <Calendar />,
    },
    {
      path: "/settings",
      element: <Settings />,
    },
    {
      path: "/repport",
      element: <Repport />,
    },
    {
      path: "/DailyNotes",
      element: <DailyNotes />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;