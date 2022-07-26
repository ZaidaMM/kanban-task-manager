import { NavLink } from 'react-router-dom';
// import boards from '../utils/boards';
import { ReactComponent as Icon } from '../assets/images/icon-board.svg';
import { useAppContext } from '../context/appContext';
import { useEffect, useState } from 'react';

const NavLinks = () => {
  const { boards, getBoards, data } = useAppContext();

  // const [boards, setBoards] = useState([]);
  // const getBoards = () => {
  //   fetch('http://localhost:5000/api/boards')
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       throw response;
  //     })
  //     .then((data) => {
  //       setBoards(data);
  //     })
  //     .catch((error) => {
  //       console.log('error fetching data:', error);
  //       // setError(error);
  //     })
  //     .finally(() => {
  //       // setLoading(false);
  //     });
  // };
  // console.log(boards);
  useEffect(() => {
    getBoards();
    // eslint-disable-next-line
  }, []);
  console.log(data);

  return (
    <div>
      {data?.map((board) => {
        return (
          <div key={board._id}>
            <span>{board.name}</span>
          </div>
        );
      })}
    </div>
  );
};
export default NavLinks;
