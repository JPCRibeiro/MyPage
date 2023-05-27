import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle, Home } from './styles/GlobalCss.styled';
import Sidebar from './components/SideBar';
import Hero from './components/Hero';
import About from './components/about/About';
import HeaderNav from './components/NavBar';
import Projects from './components/projects/Projects';
import Footer from './components/contact/Footer';
import { Boxes, ContainerBoxes } from './styles/Contact.styled';

function HoverBoxes() {
  const boxes = [];
  for (let i = 1; i <= 250; i++) {
    boxes.push(<Boxes key={i}></Boxes>);
  }

  return <ContainerBoxes>{boxes}</ContainerBoxes>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Home>
    <Sidebar/>
    <main>
      <HeaderNav/>
      <Hero/>
      <About/>
      <Projects/>
      <Footer/>
      <HoverBoxes/>
    </main>
    <GlobalStyle/>
  </Home>
);