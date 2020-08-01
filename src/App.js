import React from "react";
import Accordion from "./components/accordion";
import AboutUs from "./content/aboutus";
import Services from "./content/services";
import ContactUs from "./content/contactus";
import Tabs from "./components/tabs";

const data = [
  { id: 1, name: "About Us", content: () => <AboutUs />, state: "active" },
  { id: 2, name: "Service", content: () => <Services />, state: "inactive" },
  {
    id: 3,
    name: "Contact Us",
    content: () => <ContactUs />,
    state: "inactive",
  },
];
const data2 = [
  { id: 1, name: "About Us", content: () => <AboutUs />, state: "active" },
  { id: 2, name: "Service", content: () => <Services />, state: "inactive" },
  {
    id: 3,
    name: "Contact Us",
    content: () => <ContactUs />,
    state: "inactive",
  },
];

function App() {
  return (
    <div className="container">
      <Accordion data={data} />
      <br />
      <Tabs data={data} />
    </div>
  );
}

export default App;
