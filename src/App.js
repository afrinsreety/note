import {
  BrowserRouter
} from "react-router-dom";



import Header from "./layout/Header";
import RouterComponent from "./layout/RouterComponent";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <RouterComponent />
      </div>
    </BrowserRouter>
  );
}
