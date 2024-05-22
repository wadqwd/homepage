import React from "react";
import { Route, Routes} from "react-router-dom";
import withRouter from "../hooks/withRouter"
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Ip } from "../pages/ip";
import {Portfolios} from "../pages/portfolios";
import {Webs} from "../pages/webs";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {Baozhuang} from "../pages/baozhuang";
import { Pingmian } from "../pages/pingmian";
import { Xiaochengxu } from "../pages/xiaochengxu";
const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/xiaochengxu" element={<Xiaochengxu />} />
        <Route path="/pingmian" element={<Pingmian />} />
        <Route path="/baozhuang" element={<Baozhuang />} />
        <Route path="/webs" element={<Webs />} />
        <Route path="/portfolios" element={<Portfolios />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/ip" element={<Ip />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
