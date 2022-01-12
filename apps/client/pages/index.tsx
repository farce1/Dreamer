import { Footer, Nav } from '../components'
import { Banner, Features, Options, TryYourself } from '../sections'

export const Index = () => (
  <div className="leading-normal tracking-normal text-white gradient">
    <Nav />
    <Banner />
    <Features />
    <Options />
    <TryYourself />
    <Footer />
  </div>
)

export default Index
