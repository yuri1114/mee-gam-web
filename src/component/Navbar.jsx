import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const menuList = ["조명", "패브릭포스터", "꽃병", "식물"];

  const search = (event) => {
    if (event.key === "Enter") {
      console.log("event!", event.key);
      let keyword = event.target.value;
      console.log("keyword", keyword);
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div className="navbar">
      <ul className="gnb">
        {menuList.map((menu) => (
          <li
            key={menu}
            onClick={() => {
              navigate(`/products?category=${menu}`);
            }}
          >
            {menu}
          </li>
        ))}
      </ul>

      <div className="search-area">
        <div className="search-bar">
          <div className="icon"></div>
          <input type="text" onKeyPress={(event) => search(event)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
