import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Side from './Side.jsx'
import { useState } from "react";

function Notifications() {
    const [notifications, setNotifications] = useState({
        whileOnApp: false,
        byEmail: false,
        byPushNotification: false,
      });
    
      const handleToggle = (key) => {
        setNotifications((prevState) => ({
          ...prevState,
          [key]: !prevState[key],
        }));
      };
  return (
    <Side>
        <div className="container ">
      <h4 className='titre font-bold ' style={{ color: '#9C74FA',fontSize:'28px'  }}>Notifications</h4>
      <p className="text-muted mt-5">
        We ll always let you know about important changes, but you pick what else
        you want to hear about.
      </p>

      <h6 className="mt-24">Would you like to get notifications :</h6>

      <div className="form-check form-switch mt-8">
        <input
          className="form-check-input mr-32"
          type="checkbox"
          id="whileOnApp"
          checked={notifications.whileOnApp}
          onChange={() => handleToggle('whileOnApp')}
        />
        <label className="form-check-label" htmlFor="whileOnApp">
          While on app
        </label>
        
      </div>

      <div className="form-check form-switch mt-3">
        <input
          className="form-check-input mr-32"
          type="checkbox"
          id="byEmail"
          checked={notifications.byEmail}
          onChange={() => handleToggle('byEmail')}
        />
        <label className="form-check-label" htmlFor="byEmail">
          By Email
        </label>
      </div>

      <div className="form-check form-switch mt-3">
        <input
          className="form-check-input mr-32"
          type="checkbox"
          id="byPushNotification"
          checked={notifications.byPushNotification}
          onChange={() => handleToggle('byPushNotification')}
        />
        <label className="form-check-label" htmlFor="byPushNotification">
          By push notification
        </label>
      </div>
    </div>
    </Side>
  )
}

export default Notifications