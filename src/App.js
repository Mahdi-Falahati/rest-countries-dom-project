import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//pages
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";


// css bootsrtap 
import 'bootstrap/dist/css/bootstrap.css';
import CountryInfo from "./pages/CountryInfo";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path=":name" element={<CountryInfo />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
