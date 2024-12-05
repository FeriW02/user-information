import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routers } from "./routers/router";

createRoot(document.getElementById("root")).render(
  <div className="max-w[1140px] w-[80%] mx-auto my-[80px] ">
    <RouterProvider router={routers} />
  </div>
);
