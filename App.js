import Main from './Main';
import Menu from './Menu';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import MenuPopup from './MenuPopup';
import { Route, Routes } from 'react-router-dom';
import MenuWindow from './MenuWindow';

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
