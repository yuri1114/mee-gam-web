import { useNavigate } from "react-router-dom";

const MypageNav = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
    authenticate ? setAuthenticate(false) : setAuthenticate(true);
  };

  return (
    <div>
      <div className="mypage">
        <div onClick={goToLogin} className="login-btn">
          <div className="icon"></div>
          <p className="id">{authenticate ? "로그아웃" : "로그인"}</p>
        </div>
        {authenticate ? (
          <div onClick={() => navigate("/cart")} className="cart">
            장바구니
          </div>
        ) : null}
      </div>

      <div className="logo" onClick={() => navigate("/")}>
        <h1>MEE-GAM</h1>
      </div>
    </div>
  );
};

export default MypageNav;
