import { useState } from 'react'
import Test from './list';

const App = () => {
  const [num, setNum] = useState(1);
  const numHamdler = () => (setNum(num + 1))
  return (
    <>
      <h1>{num}</h1>

      {/* <button onClick={numHamdler}>num plus</button> */}
      <Test list="용궁" name="가보자고" age={1900} onClick={numHamdler} />
      <Test list="지옥" name="가볼까" age={1900} />
      <Test list="이승" name="가자고" age={1900} />
      <Test list="저승" name="갈까나" age={1900} />
    </>
  )

}
export default App;