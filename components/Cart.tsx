import useClickOutside from "@/libs/useClickOutside";
import { CartItem, CartType, Category, ProdType, Service } from "@/types";
import { Dispatch, SetStateAction, useState } from "react";

type CartProps = {
  category: Category;
  setCategory: Dispatch<SetStateAction<Category>>;
  cart: CartType;
  setCart: Dispatch<SetStateAction<CartType>>;
};

const Cart = ({ category, setCategory, cart, setCart }: CartProps) => {
  const [selectService, setSelectService] = useState<Service>(Service.none);
  const refService = useClickOutside(() => {
    (refService.current as Element).removeAttribute("data-dropdown");
  });
  return (
    <div
      className="flex h-full w-[400px] flex-shrink-0 flex-grow flex-col border border-gray-900 bg-gray-100"
      id="Cart"
    >
      <div className="flex-1">
        <div className="flex justify-center p-2 font-extrabold text-gray-800">
          견적카트
        </div>
        {Object.values(Category).map((renderCat) => (
          <div
            className="mx-5 my-3 outline-1 outline-red-600 hover:cursor-pointer hover:outline"
            key={renderCat}
            onClick={() => setCategory(renderCat)}
          >
            <div
              className={`flex items-center p-2 text-sm font-semibold ${
                category === renderCat
                  ? "bg-red-600 text-white"
                  : "bg-white text-gray-700"
              }`}
              id={renderCat}
            >
              {renderCat}
            </div>
            {cart[renderCat] &&
              Array.from(cart[renderCat]!!.values()).map((product) => (
                <div className="bg-white p-4" key={product._id}>
                  <div className="mb-2 text-xs text-gray-800">
                    {product.name}
                  </div>
                  <div className="flex justify-between">
                    <div className="flex h-[22px] rounded-sm border border-gray-400">
                      <div
                        className={`flex w-[20px] items-center justify-center border-r border-gray-400 pb-[2px] text-xs ${
                          cart[renderCat]!!.get(product._id)!!.count === 1
                            ? "pointer-events-none bg-gray-200 text-gray-400"
                            : "hover:cursor-pointer hover:bg-slate-300"
                        }`}
                        onClick={() => {
                          cart[renderCat]!!.get(product._id)!!.count -= 1;
                          setCart({ ...cart });
                        }}
                      >
                        -
                      </div>
                      <div className="flex w-[24px] items-center justify-center border-r border-gray-400 text-xs">
                        {cart[renderCat]!!.get(product._id)!!.count}
                      </div>
                      <div
                        className="flex w-[20px] items-center justify-center pb-[2px] text-xs hover:cursor-pointer hover:bg-slate-300"
                        onClick={() => {
                          cart[renderCat]!!.get(product._id)!!.count += 1;
                          setCart({ ...cart });
                        }}
                      >
                        +
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-900">
                      <strong>
                        {(
                          product.price *
                          cart[renderCat]!!.get(product._id)!!.count
                        ).toLocaleString("ko-KR")}
                        원
                      </strong>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-4 w-4 hover:cursor-pointer hover:text-gray-500"
                        onClick={() => {
                          cart[product.category]?.delete(product._id);
                          setCart({ ...cart });
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
      <div className="bg-gray-600 p-3">
        <div className="mb-2 text-sm font-bold text-white">
          조립신청 + AS 상품 추가
        </div>
        <div className="flex space-x-2">
          <div
            className="group relative flex flex-1 items-center justify-between rounded-sm bg-white text-sm text-gray-500 hover:cursor-pointer"
            ref={refService}
            onClick={(e) => e.currentTarget.toggleAttribute("data-dropdown")}
          >
            <div className="flex w-full items-center justify-between px-3">
              <div className="flex h-[32px] items-center" data-tier-none>
                {selectService.desc}
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                fill="currentColor"
                className="bi bi-caret-down-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </div>
            <div className="absolute left-0 top-[34px] hidden w-full flex-col rounded-sm border bg-white group-data-[dropdown]:block">
              {Object.keys(Service).map((tier) => {
                if (tier !== "none")
                  return (
                    <div
                      className="flex h-[32px] items-center px-3 hover:bg-gray-100"
                      onClick={() =>
                        setSelectService(Service[tier as keyof typeof Service])
                      }
                    >
                      {Service[tier as keyof typeof Service].desc}
                    </div>
                  );
              })}
            </div>
          </div>
          <button
            className={`rounded-sm px-5 py-2 text-xs font-bold ${
              cart.service.count === 0
                ? "bg-white text-gray-800"
                : "bg-gray-400 text-white"
            }`}
            onClick={() => {
              if (cart.service.count === 0) {
                cart.service = {
                  ...selectService,
                  count: 1,
                };
                setCart({ ...cart });
              } else {
                cart.service = {
                  ...Service.none,
                  count: 0,
                };
                setCart({ ...cart });
              }
            }}
          >
            {cart.service.count === 0 ? "담기" : "해제"}
          </button>
        </div>
      </div>
      <div
        className={`space-y-2 bg-slate-200 p-3 ${
          cart.service.count === 0 ? "hidden" : "block"
        }`}
      >
        <div className="font-bold text-gray-700">부가서비스</div>
        <div className="flex items-center">
          <div className="flex-1 text-xs text-gray-600">
            {cart.service.desc}
          </div>
          <div className="flex h-[22px] rounded-sm border border-gray-400 bg-white">
            <div
              className={`flex w-[20px] items-center justify-center border-r border-gray-400 pb-[2px] text-xs ${
                cart.service.count <= 1
                  ? "pointer-events-none bg-gray-200 text-gray-400"
                  : "hover:cursor-pointer hover:bg-slate-300"
              }`}
              onClick={() => {
                cart.service.count -= 1;
                setCart({ ...cart });
              }}
            >
              -
            </div>
            <div className="flex w-[24px] items-center justify-center border-r border-gray-400 text-xs">
              {cart.service.count}
            </div>
            <div
              className="flex w-[20px] items-center justify-center pb-[2px] text-xs hover:cursor-pointer hover:bg-slate-300"
              onClick={() => {
                cart.service.count += 1;
                setCart({ ...cart });
              }}
            >
              +
            </div>
          </div>
          <strong className="mr-1 flex w-20 justify-end text-sm font-bold text-gray-900">
            {(cart.service.price * cart.service.count).toLocaleString("ko-KR")}
            원
          </strong>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-4 w-4 text-gray-500 hover:cursor-pointer"
            onClick={() => {
              cart.service = { ...Service.none, count: 0 };
              setCart({ ...cart });
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <div className="space-y-3 p-3">
        <div className="flex items-center justify-end space-x-2">
          <div className="flex text-xs text-gray-500">
            총
            <div className="ml-1 font-bold text-gray-900">
              {(() => {
                let total = 0;
                Object.values(cart).forEach((el) => {
                  if (el instanceof Map<string, ProdType>) {
                    el.forEach((product) => {
                      total += product.count;
                    });
                  } else {
                    total += el.count;
                  }
                }, 0);
                return total;
              })()}
            </div>
            개 품목선택
          </div>
          <div
            className="border border-gray-400 bg-white px-1 py-[1px] text-xs text-gray-800 duration-300 hover:cursor-pointer hover:bg-gray-100"
            onClick={() =>
              setCart({
                ...Object.assign(
                  {},
                  ...Object.values(Category).map((CAT) => ({
                    [CAT]: new Map<string, CartItem>(),
                  }))
                ),
                service: { ...Service.none, count: 0 },
              })
            }
          >
            전체삭제
          </div>
        </div>
        <div className="flex justify-between text-xl font-bold text-gray-900">
          <div>총 합계금액</div>
          <strong>
            {(() => {
              let total = 0;
              Object.values(cart).forEach((el) => {
                if (el instanceof Map<string, ProdType>) {
                  el.forEach((product) => {
                    total += product.price * product.count;
                  });
                } else {
                  total += el.price * el.count;
                }
              }, 0);
              return total;
            })().toLocaleString("ko-KR") + "원"}
          </strong>
        </div>
        <div className="flex justify-end">
          <div className="flex items-center justify-center border bg-red-600 py-[6px] px-5 font-extrabold text-white duration-300 hover:cursor-pointer hover:bg-red-700">
            주문하기
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
