import './global';
import WorkArea from "./components/work-area/WorkArea"
import Header from "./components/header/Header"
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <Header></Header>
      <WorkArea></WorkArea>
      <Footer></Footer>
    </>
  )
}

export default App