import Hero from "@/comps/hero/Hero";
import Container from "@/comps/Container";
import Heading from "@/comps/textComp/Heading";
import Component2 from "@/comps/section2/Component";
import Component3 from "@/comps/section3/Component";
import Component4 from "@/comps/section4/Component";
import Component5 from "@/comps/section5/Component";
// import Component6 from "@/comps/section6/Component";
import Component7 from "@/comps/section7/Component";
import Component8 from "@/comps/section8/Component"
import Foot from "@/comps/footer/Footer"
import Toggle from '@/comps/textComp/Toggle'

export default function Home() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#121212",
          color: "#ffffff",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <Toggle />
        <Container>
          <Hero />
        </Container>
        <Container>
          <Heading
            boxText={"Our Standards"}
            heading={"The Fuel for Our Vision"}
            desc={
              "Driven by vision, we provide comprehensive solutions to meet all your hiring needs."
            }
          />
        </Container>
        <Container>
          <Component2 />
        </Container>
        <Container>
          <Component3 />
        </Container>
        <Container>
          <Heading
            boxText={"Our Values"}
            heading={"Our Philosophy in Action"}
            desc={
              "At Everything Talent, Bringing Our Values to Life Through Meaningful Actions"
            }
          />
        </Container>
        <Container>
          <Component4 />
        </Container>
        <Container>
          <Heading
            boxText={"Our Values & Milestones"}
            heading={"Our Journey"}
            desc={
              "Explore the milestones that have shaped our path to innovation, where every step brings us closer to transforming the future."
            }
          />
        </Container>
        <Container>
          <Component5 />
        </Container>
        {/* <Container>
          <Component6 />
        </Container> */}
        <Container>
          <Component7 />
        </Container>
        <Container>
          <Component8 />
        </Container>
        <Container>
          <Foot />
        </Container>
      </div>
    </>
  );
}
