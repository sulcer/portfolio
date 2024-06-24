import Nav from '@/components/home/nav';
import Hero from '@/components/home/hero';
import Terminal from '@/components/home/terminal';
import Projects from '@/components/home/projects';
import Slider from '@/components/home/technologies';
import Footer from '@/components/home/footer';
import Curves from '@/components/ui/curves';
import MetasHead from '@/components/home/metas-head';

export default function Home() {
  return (
    <div className={'my-6'}>
      <MetasHead />
      <Curves />
      <div className={'max-w-6xl mx-auto my-6 px-5'}>
        <Nav />
        <Hero />
        <Terminal />
        <Projects />
        <Slider />
        <Footer />
      </div>
    </div>
  );
}
