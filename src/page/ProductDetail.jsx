import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    try {
      const base = import.meta.env.BASE_URL;
      const response = await fetch(`${base}products.json`);
      const data = await response.json();
      const foundProduct = data.products.find((item) => item.id === Number(id));
      setProduct(foundProduct);
    } catch (error) {
      console.error("상품 정보를 불러오는 데 실패했습니다:", error);
    }
  };

  const addCart = () => {
    // 장바구니 기능 구현 예정
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div className="container">
      <div className="detail-product">
        <div className="img-container">
          <img src={product?.image} alt={product?.name} />
        </div>
        <div className="right-info">
          <p className="name">{product?.name}</p>
          <p className="price">$ {product?.price}</p>
          <p className="price">{product?.description}</p>
          <p className="price">size : {product?.size}</p>

          <button onClick={addCart} className="add-cart">
            추가하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
