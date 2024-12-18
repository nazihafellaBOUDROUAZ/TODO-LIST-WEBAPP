import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Side from "./Side.jsx";

const Welcome = () => {
  return (
    <Side>
      <div
        className="calendar-section -mt-5  p-2"
        style={{ flex: 1 }}
      >
        <Fullcalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={"dayGridMonth"}
          headerToolbar={{
            start: "today prev,next",
            center: "title",
            end: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          height={"90vh"}
        />
      </div>
    </Side>
  );
};

export default Welcome;

// Inline Tailwind & Bootstrap styles
const styles = `
  .full {
    display: flex;
  }
  .calendar-section {
    margin-top: 1%;
  }
  .nav-link {
    font-size: 14px;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .copy-right p {
    margin-top: 30%;
    margin-bottom: -5%;
    font-size: 10px;
    color: #fff;
  }
  .nav-link i {
    font-size: 18px;
  }
  .nav-link.active {
    background-color: #6f42c1;
    color: #fff !important;
    border-radius: 5px;
  }
  .nav-link:hover {
    background-color: #9C74FA;
  }
  button.btn-outline-secondary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding: 10px;
  }
  button.btn-light,
  button.btn-dark {
    width: 48%;
    padding: 5px;
    font-size: 14px;
  }
  .fc-button {
    background-color: #9C74FA !important;
    color: white !important;
    border: none !important;
    border-radius: 5px !important;
  }
  .fc-button:hover {
    background-color: #5A3497 !important;
    color: #FFFFFF !important;
  }
  .fc-button.fc-button-active {
    background-color: #5A3497 !important;
    border: 2px solid #9C74FA !important;
  }
  .fc-daygrid-day-number {
    color: black !important;
  }
  .fc-dayGrid-day-names {
    color: black;
  }
`;

// Inject styles directly into the document head
const injectStyles = () => {
  const styleTag = document.createElement("style");
  styleTag.innerHTML = styles;
  document.head.appendChild(styleTag);
};

injectStyles();
