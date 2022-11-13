import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { updateDonates } from './common/donatesSlice';
import { useAppDispatch } from './common/hooks';
import { socket } from './common/socketSlice';
// import { updateDonates } from './common/donatesSlice';
import { Plugin } from './plugin/Plugin'
import { PluginError } from './plugin/PluginError';
import { PluginHome } from './plugin/PluginHome';
// import { useUpdateDonateFromServer } from './plugin/service/donate';


function App() {

  const router = createBrowserRouter([
    {
      path: "/plugin",
      element: <PluginHome />,
      errorElement: <PluginError />,
    },
    {
      path: "/plugin/:streamerId",
      element: <Plugin />,
      errorElement: <PluginError />,
    }
  ])

  const dispatch = useAppDispatch()

  useEffect(() => {
    socket.on('message', (data) => {
      console.log(`recieved data ${data}`);
      const parsedData = JSON.parse(data.toString('utf8'))
      dispatch(updateDonates(parsedData))
    })
    return () => {
      socket.close();
    }
  }, [dispatch])


  return (
    <RouterProvider router={router} />
  );
}

export default App;
