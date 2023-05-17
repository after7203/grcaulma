import { RootState } from "@/store";
import { CartType, CartItem, ProdType } from "@/types";
import { useSelector } from "react-redux";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

type PropProductList = {
  loading: boolean;
  resultProducts: ProdType[];
  page: number;
  compareList: ProdType[];
  toggleCompareList: (p: ProdType) => void;
  cart: CartType;
  setCart: Dispatch<SetStateAction<CartType>>;
};

const ProductList = ({
  loading,
  resultProducts,
  page,
  compareList,
  toggleCompareList,
  cart,
  setCart,
}: PropProductList) => {
  const products = useSelector((state: RootState) => state.products);
  return (
    <div
      className="h-[900px] overflow-y-scroll border border-t-0 border-b-0 border-gray-900"
      id="itemList"
    >
      {!loading ? (
        resultProducts.length > 0 ? (
          resultProducts
            .slice((page - 1) * 30 + 0, (page - 1) * 30 + 29)
            .map((product) => {
              return (
                <div
                  className="flex h-[130px] w-full border-b"
                  key={product._id}
                >
                  <div className="relative flex h-full w-[130px] items-center justify-center">
                    <div
                      className="group absolute left-4 top-4 z-10 flex items-center space-x-2 bg-white hover:cursor-default"
                      id={`itemList_checkbox_${product._id}`}
                      onClick={() => toggleCompareList(product)}
                      data-checked={
                        compareList.find((p) => p._id === product._id)
                          ? true
                          : false
                      }
                    >
                      <div className="peer z-10 h-4 w-4 border border-gray-300 group-data-[checked=true]:border-orange-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="hidden h-full w-full text-orange-600 group-data-[checked=true]:block"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </div>
                      <div className="absolute left-[-12px] hidden h-6 w-[80px] items-center justify-end border border-gray-500 bg-white pr-1 text-xs peer-hover:flex">
                        상품비교
                      </div>
                    </div>
                    <Image
                      src={`https:${product.imgSrc}`}
                      alt={"상품 이미지"}
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className="mt-8 flex-1">
                    <div className="text-sm font-bold text-gray-800">
                      {product.name}
                    </div>
                    {product.type && (
                      <div className="text-sm text-gray-500">
                        {product.type}
                      </div>
                    )}
                  </div>
                  <div className="mr-7 flex w-[100px] flex-col items-end justify-center">
                    <div className="mb-1 flex items-center">
                      <strong className="mb-1 text-lg font-bold">
                        {product.price.toLocaleString("ko-KR")}
                      </strong>
                      <div>원</div>
                    </div>
                    <div
                      className={`flex h-[30px] w-[70px] flex-shrink-0 items-center justify-center px-2 text-sm duration-300 hover:cursor-pointer ${
                        !cart[product.category].get(product._id)
                          ? "border border-gray-300 text-gray-800 hover:bg-gray-200"
                          : "bg-gray-600 font-bold text-white hover:bg-gray-900"
                      }`}
                      onClick={() => {
                        if (!cart[product.category].get(product._id)) {
                          cart[product.category].set(product._id, {
                            ...product,
                            count: 1,
                          });
                          setCart({
                            ...cart,
                          });
                        } else {
                          cart[product.category].delete(product._id);
                          setCart({ ...cart });
                        }
                      }}
                    >
                      <div>
                        {!cart[product.category].get(product._id)
                          ? "담기"
                          : "해제"}
                      </div>
                      {!cart[product.category].get(product._id) && (
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
        ) : (
          <div className="mt-10 flex justify-center font-bold">
            조건에 맞는 상품이 없습니다.
          </div>
        )
      ) : (
        Array(10)
          .fill(0)
          .map((el, idx) => (
            <div className="flex h-[130px] w-full" key={idx}>
              <div className="flex w-[130px] items-center justify-center">
                <div className="h-[80px] w-[80px] animate-pulse rounded-md bg-slate-200" />
              </div>
              <div className="flex flex-1 flex-col justify-center space-y-2">
                <div className="h-5 w-80 animate-pulse rounded-md bg-slate-200" />
                <div className="h-5 w-16 animate-pulse rounded-md bg-slate-200" />
              </div>
              <div className="mx-7 my-10 h-6 w-[100px] animate-pulse rounded-md bg-slate-200" />
            </div>
          ))
      )}
    </div>
  );
};

export default ProductList;
