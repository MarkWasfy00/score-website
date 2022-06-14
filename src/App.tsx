import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import Heading from "./components/Heading/Heading";
import Navbar from "./components/Navbar/Navbar";
import Statistics from "./components/statistics/Statistics";
import Subscribe from "./components/Subscribe/Subscribe";
import WeDo from "./components/Wedo-section/WeDo";
import WhyUs from "./components/Whyus-section/WhyUs";



function App() {
 
  return (
    <main>
      <Navbar />
      <Heading />
      <WhyUs />
      <Statistics />
      <WeDo />
      <Blogs />
      <Subscribe />
      <Footer />
    </main>
  )
}

export default App
