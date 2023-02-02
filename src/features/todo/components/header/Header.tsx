import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import TokenContext from '../../../../context/token/TokenContext';

const Header = () => {
  const { clearToken } = useContext(TokenContext);

  const handleLogout = () => {
    if (window.confirm('정말 로그아웃 하시겠습니까?')) {
      clearToken();
    }
  };
  return (
    <div className="relative flex items-center bg-gray-600 p-2 text-gray-50">
      <h3 className="flex-1 text-center text-2xl font-bold">To Do List</h3>
      <button
        className="absolute right-5 flex items-center text-lg"
        onClick={handleLogout}
      >
        <FontAwesomeIcon icon={faRightFromBracket} />
        <span className="ml-1 text-base font-bold">로그아웃</span>
      </button>
    </div>
  );
};

export default Header;
