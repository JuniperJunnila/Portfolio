import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar.js";
import Home from "../../components/Home/Home.js";
import Footer from "../../components/Footer/Footer.js";
import PageNotImplemented from "../PageNotImplemented/PageNotImplemented.js";
import bootstrapStyles from "../BootstrapStyles/BootstrapStyles.js";

const {
  routes: { allRoutes, browserRouter, routeDivs, footer },
} = bootstrapStyles;

export default function AllRoutes({ appState }) {
  return (
    <div className={allRoutes} id="allRoutes">
      <BrowserRouter>
        <div className={browserRouter} id="browserRouter">
          <div className={routeDivs} id="routeDivs">
            <Navbar appState={appState} />
          </div>
          <div className={routeDivs} id="routeDivs">
            <Routes>
              <Route path="" element={<Home appState={appState} />} />
              <Route
                path="/our-philosophy"
                element={<PageNotImplemented pageName={"Our Philosophy"} />}
              />
            </Routes>
          </div>
          <div className={footer} id="footer">
            <Footer appState={appState} />
          </div>
        </div>
      </BrowserRouter>
      <Outlet />
    </div>
  );
}
