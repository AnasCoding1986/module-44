import { BarChart } from "recharts"
import Navbar from "./Components/Navbar/Navbar"
// import Rechart from "./Components/Rechart/Rechart"
import PriceOptions from "./Components/priceOptions/PriceOptions"


function App() {

  return (
    <>
      <Navbar></Navbar>
      <PriceOptions></PriceOptions>
      {/* <Rechart></Rechart> */}
      <BarChart></BarChart>
    </>
  )
}

export default App
