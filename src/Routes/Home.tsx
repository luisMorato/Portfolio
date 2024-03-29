import Intro from "../Components/Intro";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Layout from "../Components/Layout";

const Home = () => {
  const smoothScrollTo = (id: string) => {
    const div = document.getElementById(id);

    if(div){
      div.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  }
  
  return (
    <div>
      <Layout
        smoothScrollTo={smoothScrollTo}
      >
        <Intro
          smoothScrollTo={smoothScrollTo}
        />
        <About />
        <Contact />
      </Layout>
    </div>
  )
}

export default Home;