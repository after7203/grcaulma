import { CartType, ProdType } from "@/types";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

type PropCompareProducts = {
  compareList: ProdType[];
  toggleCompareList: (p: ProdType) => void;
  cart: CartType;
  setCart: Dispatch<SetStateAction<CartType>>;
};

const CompareProducts = ({
  compareList,
  toggleCompareList,
  cart,
  setCart,
}: PropCompareProducts) => {
  useState;
  return (
    <div
      className={`group bottom-0 z-10 flex h-[250px] w-[1260px] flex-col border duration-500 data-[close]:translate-y-[210px] ${
        compareList.length === 0 ? "hidden" : "fixed"
      }`}
      id="compareList"
    >
      <div className="flex h-[40px] items-center justify-between bg-gray-800 px-3 font-bold text-white">
        <div>상품비교 ({compareList.length})</div>
        <div
          className="flex items-center space-x-1 text-xs font-light hover:cursor-pointer"
          onClick={() => {
            document
              .querySelector("#compareList")
              ?.toggleAttribute("data-close");
          }}
        >
          <div className="group-data-[close]:hidden">닫기</div>
          <div className="hidden group-data-[close]:block">열기</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-3 w-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              className="group-data-[close]:hidden"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
              className="hidden group-data-[close]:block"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-between bg-white pl-5">
        <div className="flex items-center">
          {compareList.map((product, idx) => (
            <div
              className="flex w-[140px] flex-col items-center justify-center"
              key={idx}
            >
              <Image
                src={`https:${product.imgSrc}`}
                alt={"상품 이미지"}
                width={80}
                height={80}
                className="mb-2"
              />
              <div className="flex h-[32px] w-[110px] justify-center break-all text-xs text-gray-600 line-clamp-2">
                {product.name}
              </div>
              <div className="mb-1 flex items-center justify-center">
                <strong className="mb-1 text-lg font-bold">
                  {product.price.toLocaleString("ko-KR")}
                </strong>
                <div>원</div>
              </div>
              <div className="flex space-x-3">
                <div
                  className="group flex items-center space-x-2 bg-white hover:cursor-default"
                  id={`compareList_checkbox_${product._id}`}
                  onClick={(e) =>
                    e.currentTarget.toggleAttribute("data-checked")
                  }
                >
                  <div className="peer z-10 h-4 w-4 border border-gray-300 group-data-[checked]:border-orange-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="hidden h-full w-full text-orange-600 group-data-[checked]:block"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  className="border border-gray-300 px-1 text-xs text-gray-700 hover:cursor-pointer"
                  onClick={() => toggleCompareList(product)}
                >
                  삭제
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex h-full w-[180px] flex-col items-center justify-center space-y-4 bg-gray-100">
          <div
            className="flex h-[30px] w-[110px] items-center justify-center border bg-white text-xs font-bold text-gray-800 duration-200 hover:cursor-pointer hover:bg-slate-100"
            onClick={() => {
              let allchecked = true;
              compareList.forEach((product) => {
                if (
                  document
                    .querySelector(`#compareList_checkbox_${product._id}`)
                    ?.getAttribute("data-checked") === null
                ) {
                  document
                    .querySelector(`#compareList_checkbox_${product._id}`)
                    ?.setAttribute("data-checked", "");
                  allchecked = false;
                }
              });
              if (allchecked) {
                compareList.forEach((product) => {
                  document
                    .querySelector(`#compareList_checkbox_${product._id}`)
                    ?.removeAttribute("data-checked");
                });
              }
            }}
          >
            전체선택/해제
          </div>
          <div
            className="flex h-[30px] w-[110px] items-center justify-center border bg-white text-xs font-bold text-gray-800 duration-200 hover:cursor-pointer hover:bg-slate-100"
            onClick={() => {
              compareList.forEach((product) => {
                if (
                  !cart[product.category].get(product._id) &&
                  document
                    .querySelector(`#compareList_checkbox_${product._id}`)
                    ?.hasAttribute("data-checked")
                ) {
                  cart[product.category].set(product._id, {
                    ...product,
                    count: 1,
                  });
                  setCart({
                    ...cart,
                  });
                }
              });
            }}
          >
            선택상품 담기
          </div>
          <div
            className="flex h-[30px] w-[110px] items-center justify-center border bg-white text-xs font-bold text-gray-800 duration-200 hover:cursor-pointer hover:bg-slate-100"
            onClick={() => {
              compareList.forEach((product) => {
                if (
                  cart[product.category].get(product._id) &&
                  document
                    .querySelector(`#compareList_checkbox_${product._id}`)
                    ?.hasAttribute("data-checked")
                ) {
                  cart[product.category].delete(product._id);
                  setCart({
                    ...cart,
                  });
                }
              });
            }}
          >
            선택상품 삭제
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareProducts;
