import "./App.css";
import Footer from "./components/Footer";
import Form from "./components/Form";
import HeaderSection from "./components/HeaderSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skill from "./components/Skill";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <HeaderSection></HeaderSection>
      <Skill></Skill>
      <Projects></Projects>
      <Form></Form>
      <Footer></Footer>
    </div>
  );
}

export default App;
