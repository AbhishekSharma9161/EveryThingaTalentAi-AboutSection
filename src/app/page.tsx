import Hero from "@/comps/hero/Hero";
import Container from "@/comps/Container";
// import Heading from "@/comps/textComp/Heading";
import Component3 from "@/comps/section3/Component";
import Component4 from "@/comps/section4/Component";
import Component5 from "@/comps/section5/Component";
import Component6 from "@/comps/section6/Component";
import Component7 from "@/comps/section7/Component";
import Component8 from "@/comps/section8/Component"
import Foot from "@/comps/footer/Footer"
import Standards from "@/comps/standards/Standards";
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
        className={`min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-all bg-gradient-to-br from-purple-50 via-pink-50 to-white dark:from-black dark:via-slate-900 dark:to-slate-950 ${geistFont.className}`}
      >
        {/* <Toggle /> */}
        <NavBar/>
        <Container footer={false}>
          <Hero />
        </Container>
        <Container footer={false}>
          <Standards />
        </Container>
        <Container footer={false}>
          <Component3 />
        </Container>
        {/* Section 4 */}
        <Container footer={false}>
          <Component4 />
        </Container>
        <Container footer={false}>
          <Component5 />
        </Container>
        {/* Section 6 */}
        <div>
          <Component6 />
        </div>
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
