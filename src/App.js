import Navbar from './components/Navbar';
import Home from './components/Home';
import Track from './components/Track';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

function App() {
  //creating routes 
  const router = createBrowserRouter([//we are using react-rod here
    {
      path: '/',
      element: (
        <>
          <Navbar  />
          <Home />
        </>
      ),
    },
    { path: '/track',// route for '/track
    element: (
      <>
          <Navbar />
          <Track />
      </>
    ), },
  ]);

return (
    <>
    {/* passing created router as props to RouterProvider */}
   <RouterProvider router={router} />
    
    </>
    
  );
}

export default App;
