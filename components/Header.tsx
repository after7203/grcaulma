import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import SearchKeywordList from "./SearchKeywordList";
import Logo from "/assets/logo.png";
import LogoText from "/assets/logo_text.png";
import Router from "next/router";
import { ProdType } from "@/types";
import { gql, makeVar, useQuery, useReactiveVar } from "@apollo/client";
import { applyProducts } from "@/store/products";

const Header = () => {
  const GET_PRODUCTS = gql`
    query GetProducts {
      products {
        _id
        name
        imgSrc
        type
        price
        category
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  const products: ProdType[] = useReactiveVar(applyProducts);
  useEffect(() => {
    console.log(loading);
    if (!loading) {
      applyProducts(data.products);
    }
  }, [data, loading]);
  // const products = useSelector((state: RootState) => state.products);
  // const dispatch = useDispatch();
  const [input, setInput] = useState<string>("");
  const onSearch = (product: ProdType) => {
    setInput("");
    // console.log(product);
    Router.push({
      pathname: "/estimation",
      query: { product: JSON.stringify(product) },
    });
  };
  // useEffect(() => {
  //   (async () => {
  //     const { products } = await (await fetch("/api/products")).json();
  //     await dispatch(module_products.initailize(products));
  //   })();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  // useEffect(() => {
  //   console.log(products);
  // }, [products]);
  // useEffect(() => {
  //   console.log(concatProducts);
  // }, [concatProducts]);
  return (
    <header className="mb-5 flex flex-col items-center">
      <div className="mt-10 mb-8 flex w-[1260px] shrink-0 items-center justify-center space-x-10">
        <Link href={"/"} className="flex items-center">
          <Image src={Logo} height={50} alt={"로고 이미지"} priority />
          <Image src={LogoText} height={30} alt={"로고 이미지"} priority />
        </Link>
        <div className="relative rounded-sm bg-gradient-to-r from-red-500 to-purple-500 p-[1px]">
          <div className="flex h-[52px] w-[380px] items-center rounded-sm bg-white px-5">
            <input
              type="text"
              className="peer flex-1 leading-[50px] focus-visible:outline-none"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              className="text-amber-500"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            {input && products.length > 0 && (
              <div className="absolute left-[0px] top-[54px] z-20 hidden h-[270px] w-full space-y-1 border bg-white py-3 shadow-lg peer-focus:block">
                <SearchKeywordList
                  prods={products}
                  search={input}
                  onClick={onSearch}
                />
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center text-xs text-gray-400">
          <div className="border-r px-2">로그인</div>
          <div className="border-r px-2">회원가입</div>
          <div className="border-r px-2">마이글카</div>
          <div className="px-2">고객지원</div>
        </div>
      </div>
      <Navbar></Navbar>
    </header>
  );
};

export default Header;
