//import Image from "next/image";
//import { Geist, Geist_Mono } from "next/font/google";
//import ProjectsGrid from './components/ProjectsGrid';
import Hero from './components/Hero'
import NavbarDesktop from './components/NavbarDesktop'
import SectionContact from './components/SectionContact'
import SectionEducation from './components/SectionEducation'
import SectionProjects from './components/SectionProjects';
import SectionResume from './components/SectionResume';
import 'bootstrap/dist/css/bootstrap.min.css';
/*
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
*/
export default function Home() {
  return (
    <>
      <Hero></Hero>
      <NavbarDesktop></NavbarDesktop>
      <SectionContact></SectionContact>
      <SectionProjects></SectionProjects>
      <SectionEducation></SectionEducation>
      <SectionResume></SectionResume>

    </>

  );
}
