import TopBanner from '../pages/TopBanner';
import ListTest from '../pages/ListTest';
import './basic.css';
import { useEffect, useState } from 'react';


// json은 객체를 바꾸는 일은 하는 것 같음.
//  리엑트에서의 useEffect는 사이트이펙트 = 스테이트를 변경시키는 것.
const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(result => setData(result))
  }, [])

  return (
    <div>
      {
        data.map(it => <li key={it.id}>{it.id} {it.title}</li>)
      }
    </div>
  )
}

export default App;