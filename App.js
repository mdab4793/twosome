import Menu from './component/Menu';
import Main from './component/Main';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MenuPopup from './component/MenuPopup';
import { Route, Routes } from 'react-router-dom';

import MenuWindow from './component/MenuWindow';

function App() {
  let [item, setItem] = useState([]);

  useEffect(() => {
    axios
      .get('https://raw.githubusercontent.com/mdab4793/pos/main/db.json')
      .then((result) => {
        setItem(result.data);
        // console.log(item[1]);
      })
      .catch(() => {
        console.log('fail');
      });
  }, []);
  return (
    <body>
      <Routes>
        <Route path='/' element={<Main item={item} />} />
        <Route path='/menu' element={<Menu item={item} />} />
        <Route path='/menuwindow' element={<MenuWindow item={item} />} />
        <Route path='/menupopup/:id' element={<MenuPopup item={item} />} />
      </Routes>
    </body>
  );
}

export default App;
