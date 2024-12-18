import './App.css';
import Signin from './components/Signin'; 
import Login from './components/Login';
import First from './components/Firstpage';
import Welcome from './components/Welcome';
import Calendar from './components/Calendar';
import Settings from './components/Settings';
import Repport from './components/Repport';
import Notifications from './components/Notifications';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Support from './components/Support';
function App() {
  const route = createBrowserRouter([
   
  {
    path:"/login",
    element:<Login />,
 },
 {
  path:"/support",
  element:<Support />,
},
 {
  path:"/notifications",
  element:<Notifications />,
},
 {
  path:"/welcome",
  element:< Welcome />,
},
 {
  path:"/",
  element:<First />,
},
{
  path:"/signin",
  element:<Signin/>,
},
{
  path:"/calendar",
  element:<Calendar/>,
},
{
  path:"/settings",
  element:<Settings />,
},
{
  path:"/repport",
  element:<Repport />,
},

]);
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;