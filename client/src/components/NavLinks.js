import { NavLink } from 'react-router-dom';
import { ReactComponent as Icon } from '../assets/images/icon-board.svg';
import { useAppContext } from '../context/appContext';
import { useEffect, useState } from 'react';

const NavLinks = () => {
  // const { getBoards, boards } = useAppContext();
  const [boards, setBoards] = useState([]);

  const getBoards = () => {
    fetch('http://localhost:5000/api/boards')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setBoards(data);
        console.log(data);
      })
      .catch((error) => {
        console.log('error fetching data:', error);
        // setError(error);
      })
      .finally(() => {
        // setLoading(false);
      });
  };
  console.log(boards);

  useEffect(() => {
    getBoards();
    // eslint - disable - next - line;
  }, []);
  console.log(boards);

  return (
    <div>
      {boards.map((board) => {
        return (
          <div key={board._id} className='nav-link'>
            <span className='icon'>
              <Icon />
            </span>
            {board.name}
          </div>
        );
      })}
    </div>
  );
};
export default NavLinks;
