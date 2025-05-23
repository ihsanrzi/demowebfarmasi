import Banner from './components/Banner/index';
import Aboutus from './components/Aboutus/index';
import Dedicated from './components/Dedicated/index';
import Digital from './components/Digital/index';
import Wework from './components/Wework/index';
import Ourteam from './components/Ourteam/index';
import Featured from './components/Featured/index';
import FAQ from './components/FAQ/index';
import Testimonials from './components/Testimonials/index';
import Articles from './components/Articles/index';
import Joinus from './components/Joinus/index';
import Insta from './components/Insta/index';


export default function Home() {
  return (
    <main>
      <Banner />
       <FAQ />
       <Wework />
        <Dedicated />
      <Aboutus />
      <Testimonials />
      <Digital />
      {/* <Featured /> */}
      {/* <FAQ /> */}
      <Articles />
      <Ourteam />
      {/* <Joinus /> */}
      {/* <Insta /> */}
    </main>
  )
}
