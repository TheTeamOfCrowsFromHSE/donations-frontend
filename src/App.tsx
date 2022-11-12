import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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


  return (
    <RouterProvider router={router} />
  );
}

export default App;
