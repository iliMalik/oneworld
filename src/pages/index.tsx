import Contact from "../components/Contact";
import { Hero } from "../components/Hero";
import Layout from "../components/Layout";
import { Features } from "../components/Features";
import { Services } from "../components/Services";
import Faq from "../components/Faq";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Features />
      <Faq />
      <Contact />
    </Layout>
  );
}
