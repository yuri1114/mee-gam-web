import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { useSearchParams } from "react-router-dom";

const ProductAllPage = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    const category = query.get("category");

    const base = import.meta.env.BASE_URL;
    const response = await fetch(`${base}products.json`);
    const data = await response.json();

    // 1. 카테고리 필터
    let filtered = category
      ? data.products.filter((item) => item.product === category)
      : data.products;

    // 2. 이름 기반 검색 필터 추가
    if (searchQuery) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setProductList(filtered);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div className="container">
      <div className="inner-container">
        {productList.length === 0 ? (
          <p className="empty-message">검색 결과가 없습니다.</p>
        ) : (
          productList.map((menu) => <ProductCard key={menu.id} item={menu} />)
        )}
      </div>
    </div>
  );
};

export default ProductAllPage;
