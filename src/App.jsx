import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./content/Home";
import Courses from "./components/Courses";
import All from "./content/All";
import Fsd from "./content/Fsd";
import Ds from "./content/Ds";
import Cs from "./content/Cs";
import Career from "./content/Career";

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/courses",
      element: <Courses />,
      children: [
        {
          path: "all",
          element: <All />,
        },
        {
          path: "fsd",
          element: <Fsd />,
        },
        {
          path: "data-science",
          element: <Ds />,
        },
        {
          path: "cyber-security",
          element: <Cs />,
        },
        {
          path: "careers",
          element: <Career />,
        },
      ],
    },
  ]);
  
  function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;