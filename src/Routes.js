import React from "react";
import Contacts from "pages/Contacts";
import Parking from "pages/Parking";
import Infrastructure1 from "pages/Infrastructure1";
import Infrastructure from "pages/Infrastructure";
import Service from "pages/Service";
import Rents2 from "pages/Rents2";
import Rents from "pages/Rents";
import Tenants1 from "pages/Tenants1";
import Tenants from "pages/Tenants";
import News1 from "pages/News1";
import News from "pages/News";
import About from "pages/About";
import Index from "pages/Index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/index" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/news1" element={<News1 />} />
        <Route path="/tenants" element={<Tenants />} />
        <Route path="/tenants1" element={<Tenants1 />} />
        <Route path="/rents" element={<Rents />} />
        <Route path="/rents2" element={<Rents2 />} />
        <Route path="/service" element={<Service />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/infrastructure1" element={<Infrastructure1 />} />
        <Route path="/parking" element={<Parking />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
