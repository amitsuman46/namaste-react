import React,{lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
//464509
//chunking //code splitting //dynamic bundling // lazy loading //on demand loading

const Grocery = lazy(()=>import('./components/Grocery')); //lazy loading
const About = lazy(()=>import('./components/About'));

const AppLayout = () => {
 
   const [userName, setUserName] = useState();

   useEffect(()=>{
    const data = {
      name: "Amit Suman",
    };
    setUserName(data.name);
   },[])

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
    <div className="app">
      <Header />
      <Outlet /> 
    </div>
    </UserContext.Provider>
    </Provider>
  );
};
//outlet will be filled with children according to the path 
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path:"/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery" , element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>,
      },
      {
        path: "/restaurants/:resId" , element: <RestaurantMenu/>
      }
    ],
    errorElement: <Error />,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
