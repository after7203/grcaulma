import Image from "next/image";
import router from "next/router";
import { useRef, useState } from "react";

const Carousel = () => {
  const [page, setpage] = useState<number>(0);
  return (
    <div className="flex h-[420px] w-full justify-center bg-slate-100">
      <div className="flex w-[1260px] flex-col items-center justify-center">
        <div className="mb-5 flex w-full justify-center space-x-20 text-stone-600">
          <div
            className={`hover:cursor-pointer hover:underline ${
              page === 0 && "font-bold text-black underline"
            }`}
            onClick={() => setpage(0)}
          >
            가정용/사무용PC
          </div>
          <div
            className={`hover:cursor-pointer hover:underline ${
              page === 1 && "font-bold text-black underline"
            }`}
            onClick={() => setpage(1)}
          >
            게임용PC
          </div>
        </div>
        <div className="relative flex h-[330px] w-full justify-center">
          {/* 캐러셀 콘텐츠 */}
          <div className="w-full overflow-hidden">
            <div
              className={`flex duration-200 translate-x-[${-1260 * page}px]`}
            >
              <div
                className="w-[1260px] shrink-0"
                onClick={() => router.push("/recommend/office")}
              >
                <Image
                  src={"/office_main.png"}
                  alt={"가정용/사무용PC"}
                  fill
                  className="!static !h-auto object-contain hover:cursor-pointer hover:shadow-[5px_8px_9px_rgba(0,0,0,0.14)]"
                />
              </div>
              <div className="flex w-[1260px] shrink-0 justify-center space-x-10">
                <div
                  className="group relative flex h-[330px] w-[350px] flex-col items-center bg-white hover:cursor-pointer hover:shadow-[5px_8px_9px_rgba(0,0,0,0.14)]"
                  onClick={() => router.push("/recommend/gaming/lol")}
                >
                  <Image
                    src={`/lol.jpeg`}
                    alt={`lol`}
                    fill
                    className={`!static !w-auto object-contain`}
                  />
                  <div className="absolute bottom-0 flex w-full flex-1 flex-col items-center justify-center bg-white py-2">
                    <div className="text-xl font-bold group-hover:underline">
                      리그 오브 레전드
                    </div>
                    <div className="text-gray-600">빠질 수밖에 없는 재미</div>
                  </div>
                </div>
                <div
                  className="group relative flex h-[330px] w-[350px] flex-col items-center bg-white hover:cursor-pointer hover:shadow-[5px_8px_9px_rgba(0,0,0,0.14)]"
                  onClick={() => router.push("/recommend/gaming/pubg")}
                >
                  <Image
                    src={`/pubg.jpeg`}
                    alt={`pubg`}
                    fill
                    className={`!static !w-auto object-contain`}
                  />
                  <div className="absolute bottom-0 flex w-full flex-1 flex-col items-center justify-center bg-white py-2">
                    <div className="text-xl font-bold group-hover:underline">
                      배틀그라운드
                    </div>
                    <div className="text-gray-600">
                      배그, 누구나 무료로 플레이!
                    </div>
                  </div>
                </div>
                <div
                  className="group relative flex h-[330px] w-[350px] flex-col items-center bg-white hover:cursor-pointer hover:shadow-[5px_8px_9px_rgba(0,0,0,0.14)]"
                  onClick={() => router.push("/recommend/gaming/cyberpunk")}
                >
                  <Image
                    src={`/cyberpunk.jpg`}
                    alt={`cyberpunk`}
                    fill
                    className={`!static !w-auto object-cover`}
                  />
                  <div className="absolute bottom-0 flex w-full flex-1 flex-col items-center justify-center bg-white py-2">
                    <div className="text-xl font-bold group-hover:underline">
                      사이버펑크 2077
                    </div>
                    <div className="text-gray-600">
                      나이트 시티가 당신을 바꿔 놓을 것입니다
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 페이지 넘김 버튼 */}
          <div
            className="absolute left-[-16px] top-[calc(50%-16px)] rounded-full bg-white p-1 text-gray-500 shadow-md hover:cursor-pointer"
            onClick={() => {
              if (page !== 0) {
                setpage((page) => page - 1);
              } else {
                setpage(1);
              }
            }}
          >
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
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <div
            className="absolute right-[-16px] top-[calc(50%-16px)] rounded-full bg-white p-1 text-gray-500 shadow-md hover:cursor-pointer"
            onClick={() => {
              page !== 1 ? setpage((page) => page + 1) : setpage(0);
            }}
          >
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
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
