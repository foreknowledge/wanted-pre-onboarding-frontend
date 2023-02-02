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
    <div className="flex flex-row-reverse items-center text-gray-700">
      <button
        className="mr-2 flex items-center p-2 text-lg"
        onClick={handleLogout}
      >
        <FontAwesomeIcon icon={faRightFromBracket} />
        <span className="ml-1 text-base font-bold">로그아웃</span>
      </button>
    </div>
  );
};

export default Header;
