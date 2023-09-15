import Container from '@/components/Container'
import Hero from '@/components/Hero'
import Projects from '@/components/FavouriteProjects'

import "../styles/Home.module.css";

export default function Home() {
  return (
    <Container
      title="Ren Dzaky - Fullstack Developer"
    >
        <Hero/>
        <Projects/>
    </Container>
  );
}