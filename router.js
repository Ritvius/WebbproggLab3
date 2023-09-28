import { createBrowserRouter } from "react-router-dom";
import App from './App';
import ComposeSalad from "./ComposeSalad";
import ViewOrder from "./ViewOrder";

const router = createBrowserRouter([
    {
        path: "/",  
        element: <App />,
        children: [
            {
                path: "compose-salad",
                element: <ComposeSalad/>
            },
            {
                path: "view-order",
                element: <ViewOrder/>
            }
        ]
    }
]);
export default router;

