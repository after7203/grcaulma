import Image from "next/image";
import router from "next/router";
import { useEffect, useRef } from "react";

const AsideMenu = () => {
  const refMenu = useRef<HTMLDivElement>(null);
  const refbaseLine = useRef<HTMLDivElement>(null);
  const fixMenu = () => {
    if (refMenu.current && refbaseLine.current) {
      //const MenuY = refMenu.current.getBoundingClientRect().top;
      // console.log(distance);
      if (refMenu.current.getBoundingClientRect().top < 37) {
        refMenu.current.setAttribute("data-fixed", "");
      }
      if (refbaseLine.current.getBoundingClientRect().top >= 37) {
        refMenu.current.removeAttribute("data-fixed");
      }
      // console.log(
      //   refMenu.current.parentElement!.getBoundingClientRect().top -
      //     refMenu.current.getBoundingClientRect().top
      // );
      // if (distance === 37)
      //   console.log(refMenu.current.parentElement?.getBoundingClientRect().top);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", fixMenu);
    return () => {
      window.removeEventListener("scroll", fixMenu);
    };
  }, []);
  return (
    <div ref={refbaseLine} className="relative">
      <div
        className="absolute flex h-0 w-full justify-center space-x-[1350px] data-[fixed]:fixed data-[fixed]:top-[37px]"
        ref={refMenu}
      >
        <div className="flex h-[420px] justify-center">
          <div className="relative flex w-[100px] flex-col items-center justify-center space-y-8">
            <div>
              <Image
                src={"/logo.png"}
                alt={"글카얼마 로고"}
                fill
                className="!static !h-auto object-contain"
              />
              <Image
                src={"/logo_text.png"}
                alt={"글카얼마 로고"}
                fill
                className="!static !h-auto object-contain"
              />
            </div>
            <div className="flex w-full flex-col items-center justify-center space-y-3 text-xs font-bold">
              <div
                className="flex h-[40px] w-full items-center justify-center rounded-sm border border-gray-600 bg-white hover:cursor-pointer"
                onClick={() => router.push("/recommend/office")}
              >
                {"가정용/사무용PC"}
              </div>
              <div
                className="flex h-[40px] w-full items-center justify-center rounded-sm border border-gray-600 bg-white hover:cursor-pointer"
                onClick={() => router.push("/recommend/gaming/lol")}
              >
                {"리그오브레전드"}
              </div>
              <div
                className="flex h-[40px] w-full items-center justify-center rounded-sm border border-gray-600 bg-white hover:cursor-pointer"
                onClick={() => router.push("/recommend/gaming/pubg")}
              >
                {"배틀그라운드"}
              </div>
              <div
                className="flex h-[40px] w-full items-center justify-center rounded-sm border border-gray-600 bg-white hover:cursor-pointer"
                onClick={() => router.push("/recommend/gaming/cyberpunk")}
              >
                {"사이버펑크"}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[50px] flex h-[420px] justify-center">
          <div className="flex w-[74px] flex-col items-center space-y-3">
            <div className="divide-y-[1px] rounded-md border bg-white text-xs text-gray-700">
              <div className="relative flex flex-col items-center justify-center space-y-1 px-3">
                <div className="group my-3 flex flex-col items-center justify-center hover:cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-8 w-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                  <div className="absolute right-[13px] top-[6px] mr-[1px] flex h-[16px] w-[16px] items-center justify-center rounded-full bg-red-500 font-bold text-white">
                    0
                  </div>
                  <div className="group-hover:underline">장바구니</div>
                </div>
              </div>
              <div className="relative flex flex-col items-center justify-center space-y-1 px-3">
                <div className="group my-3 flex flex-col items-center justify-center hover:cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-8 w-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                  <div className="group-hover:underline">관심상품</div>
                </div>
              </div>
            </div>
            <div className="h-[200px] rounded-md border bg-white p-3 text-xs text-gray-700">
              <div className="flex justify-center text-center">
                {"최근본 상품"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsideMenu;
