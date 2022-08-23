import { useEffect, useRef, useState } from "react";
import './basic.css';
import MainVisual from "./MainVisual";
import Totop from './Totop';
import TabBasic from './TabBasic';
import TopBanner from './TopBanner'
import { Mybtn_red, Mybtn_yellow } from './StyledBtn';
const App = () => {

  const [num, setNum] = useState(1);
  const [toggle, setToggle] = useState(true);


  const Test = () => {
    return (
      <div>
        hellow
      </div>
    )
  }

  return (

    <>
      <TopBanner />
      <MainVisual />
      <TabBasic />
      {num}
      <Mybtn_red>hohoho</Mybtn_red>
      <Mybtn_yellow>hohoho</Mybtn_yellow>
      <section className={toggle ? '' : 'on'}>
        {toggle ? 'loading...' : <Test />}
      </section>
      <div className={toggle ? '' : 'on'}>000</div>
      <button onClick={
        () => (
          setNum(num + 1),
          console.log(toggle),
          setToggle(!toggle),
          console.log(num)
        )
      }>click</button>
      <Totop />
    </>
  )
}


export default App;