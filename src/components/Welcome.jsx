/*import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./calendar.css"; // For custom styles if needed
import logo from './logo.png';

const Calendar = () => {
  return (
    <div className="full">
    <div className="d-flex flex-column flex-shrink-0 p-3 " style={{ width: "250px", height: "100vh",backgroundColor: "#5A3497" }}>
      {/* App Header */
      /*<div  className='logoo'><img src={logo} alt='' />
      </div>
      
      <hr />

      {/* Menu Items */
      /*<ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="/welcome" className="nav-link  text-light" style={{ background:'#9C74FA' }}>
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
           <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
           <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
           </svg> Home
          </a>
        </li>
        <li>
          <a href="/calendar" className="nav-link text-light" >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-date-fill" viewBox="0 0 16 16">
            <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2"/>
            <path d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a13 13 0 0 1 1.313-.805h.632z"/>
            </svg> Calendar
          </a>
        </li>
        <li>
          <a href="/projects" className="nav-link text-light">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">
            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
            <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
            </svg> Projects List
          </a>
        </li>
        <li>
          <a href="/daily-notes" className="nav-link text-light">  
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sticky-fill" viewBox="0 0 16 16">
            <path d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1zm6 8.5a1 1 0 0 1 1-1h4.396a.25.25 0 0 1 .177.427l-5.146 5.146a.25.25 0 0 1-.427-.177z"/>
            </svg>Daily Notes
          </a>
        </li>
      </ul>
      <hr />

      {/* General Section */
      /*<ul className="nav nav-pills flex-column">
        <li>
          <a href="/notifications" className="nav-link text-light">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"/>
            </svg>  Notifications
          </a>
        </li>
        <li>
          <a href="/settings" className="nav-link text-light">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
  <         path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
            </svg>  Settings
          </a>
        </li>
        <li>
          <a href="/support" className="nav-link text-light">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"/>
            </svg>  Support
          </a>
        </li>
        <li>
          <a href="/report" className="nav-link text-light">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-flag-fill" viewBox="0 0 16 16">
           <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12 12 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A20 20 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a20 20 0 0 0 1.349-.476l.019-.007.004-.002h.001"/>
           </svg> Report
          </a>
        </li>
      </ul>
      <div className="copy-right">
        <p>© 2024 Your Website Name. All rights reserved</p>
      </div>
      {/*dashboard */
    
    /*</div>

    <div>

    </div>
    </div>
  );
};

export default Calendar;*/


import React from 'react';
import Side from './Side.jsx';
import  {Link} from "react-router-dom";
import { Pie } from 'react-chartjs-2';
import dashboard from "../assets/dashboard.png";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the necessary chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

// Function to calculate task percentages
const calculatePercentages = (tasks) => {
  if (!Array.isArray(tasks)) {
    return { todo: 0, doing: 0, done: 0, review: 0 }; // Default to 0% if tasks is not an array
  }

  const totalTasks = tasks.length;

  if (totalTasks === 0) {
    return { todo: 0, doing: 0, done: 0, review: 0 }; // Return 0% if there are no tasks
  }

  const counts = {
    todo: tasks.filter((task) => task.status === "todo").length,
    doing: tasks.filter((task) => task.status === "doing").length,
    done: tasks.filter((task) => task.status === "done").length,
    review: tasks.filter((task) => task.status === "review").length,
  };

  return {
    todo: (counts.todo / totalTasks) * 100,
    doing: (counts.doing / totalTasks) * 100,
    done: (counts.done / totalTasks) * 100,
    review: (counts.review / totalTasks) * 100,
  };
};

const Welcome = ({ tasks }) => {
  const percentages = calculatePercentages(tasks);

  const chartData = {
    labels: ['To Do', 'In Progress', 'Done', 'Need Review'],
    datasets: [
      {
        data: [
          percentages.todo,
          percentages.doing,
          percentages.done,
          percentages.review,
        ],
        backgroundColor: ['#FF0000', '#0073e6', '#00cc00', '#E7D800'], // Different colors for each category
      },
    ],
  };

  return (
    <Side>
      <div className="p-8 min-h-screen  text-gray-700 ">
        <div className='d-flex justify-evenly -mt-6 bg-gray-50 rounded-lg mb-24'>
          <div>
            <h1 className='text-3xl font-bold text-[#5A3497] -ml-12 mt-24 '>YOUR Tasks</h1>
            <p className='text-xl  text-gray-400 font-bold mt-2 -ml-12 mb-12 '>check your project list and scheduales</p>
            <Link
              to="/ProjectsList" className="btn bg-[#9C74FA] text-[#5A3497] font-bold rounded-lg shadow-md w-full mt-3 -ml-5 ">
                    Project List
                    </Link>
          </div>
          <div>
          <img src={dashboard} alt="" />
          </div>
        </div>

        
        
        <h2 className="text-3xl font-bold text-purple-600 mb-10 -mt-8 -ml-5"style={{ color: '#9C74FA',fontSize:'28px'  }}>Dashboard</h2>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <p className="bg-gray-100 p-4 rounded-lg shadow-md text-center font-bold text-gray-800 text-[#FF0000]">
            To Do: <span className="text-purple-600">{percentages.todo.toFixed(2)}%</span>
          </p>
          <p className="bg-gray-100 p-4 rounded-lg shadow-md text-center font-bold text-gray-800 text-[#0073e6]">
            In Progress: <span className="text-purple-600">{percentages.doing.toFixed(2)}%</span>
          </p>
          <p className="bg-gray-100 p-4 rounded-lg shadow-md text-center font-bold text-gray-800 text-[#00cc00]	">
            Done: <span className="text-purple-600">{percentages.done.toFixed(2)}%</span>
          </p>
          <p className="bg-gray-100 p-4 rounded-lg shadow-md text-center font-bold text-gray-800 text-[#E7D800]	">
            Need Review: <span className="text-purple-600">{percentages.review.toFixed(2)}%</span>
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md flex justify-center">
          <div className="w-1/3">
            <Pie data={chartData} />
          </div>
        </div>
      </div>
    </Side>
  );
};

export default Welcome;
