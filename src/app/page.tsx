import Hero from "@/comps/hero/Hero";
import Container from "@/comps/Container";
import Heading from "@/comps/textComp/Heading";
import Component2 from "@/comps/section2/Component";
import Component3 from "@/comps/section3/Component";
import Component4 from "@/comps/section4/Component";
import Component5 from "@/comps/section5/Component";
import Component6 from "@/comps/section6/Component";
import Component7 from "@/comps/section7/Component";
import Component8 from "@/comps/section8/Component"
import Foot from "@/comps/footer/Footer"
// import Toggle from '@/comps/textComp/Toggle'
import {Geist} from 'next/font/google'
import NavBar from '@/comps/nav/NavBar'

const geistFont = Geist({
  subsets: ["latin"],
  weight: '400',
})


export default function Home() {
  return (
    <>
      <div
        className={`min-h-screen p-5 bg-white text-black dark:bg-gray-900 dark:text-white transition-all   bg-gradient-to-br from-purple-50 via-pink-50 to-white dark:from-black dark:via-slate-900 dark:to-slate-950 ${geistFont.className}`}
      >
        {/* <Toggle /> */}
        <NavBar/>
        <Container footer={false}>
          <Hero />
        </Container>
        <Container  footer={false}>
          <div className="mb-20 ">
          <Heading
            boxText={"Our Standards"}
            stHead={'The Fuel for'}
            gradHead={'Our Vision'}
            endHead={''}
            desc={
              `Driven by vision, we provide comprehensive solutions to meet all your hiring needs.`
            }
          />
          </div>
          <Component2 />
        </Container>
        <Container footer={false}>
          <Component3 />
        </Container>
        <Container footer={false}>
          <Heading
            boxText={"Our Values"}
            stHead={'Our Philosophy in'}
            gradHead={'Action'}
            endHead={''}
            desc={
              "At Everything Talent, Bringing Our Values to Life Through Meaningful Actions"
            }
          />
        </Container>
        <Container footer={false}>
          <Component4 />
        </Container>
        <Container footer={false}>
          <Component5 />
        </Container>
        <Container footer={false}>
          <Heading
            boxText={"Our Values & Milestones"}
            stHead={'Our'}
            gradHead={'Journey'}
            endHead={''}
            desc={
              "Explore the milestones that have shaped our path to innovation, where every step brings us closer to transforming the future."
            }
          />
        </Container>
        <Container footer={false}>
          <Component6 />
        </Container>
        <Container footer={false}>
          <Component7 />
        </Container>
        <Container footer={true}>
          <Component8 />
          <Foot />
        </Container>
      </div>
    </>
  );
}
