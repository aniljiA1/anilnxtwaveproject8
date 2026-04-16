import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyChoose from "./components/WhyChoose";
import Eligibility from "./components/Eligibility";
import Learn from "./components/Learn";
import Placement from "./components/Placement";
import Kickoff from "./components/Kickoff";
import CallbackModal from "./components/CallbackModal";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Header />
      <Hero openModal={() => setShowModal(true)} />
      <WhyChoose />
      <Eligibility />
      <Learn />
      <Placement />
      <Kickoff openModal={() => setShowModal(true)} />

      <CallbackModal show={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
}

export default App;
