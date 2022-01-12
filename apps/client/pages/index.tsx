import { Footer, Nav } from '../components'
import { Banner, Features } from '../sections'

export const Index = () => (
  <div className="bg-gradient-to-r from-[#c33764] to-[#1d2671] text-white font-mono">
    <Nav />
    <Banner />
    <Features />
    <Footer />
  </div>
)

export default Index
