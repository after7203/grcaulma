import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";
import recommend_sets from "@/data/recommend";
import { useSelector } from "react-redux";
import Router, { useRouter } from "next/router";
// import img_office from "@/public/office.png";
// import img_cyberpunk from "@/public/gaming_cyberpunk.webp";
// import img_pubg from "@/public/gaming_pubg.webp";
// import img_lol from "@/public/gaming_lol.webp";

const Category = () => {
  const router = useRouter();
  const [sort, setSort] = useState<"low" | "high" | "new">("low");
  const [category, setCategory] =
    useState<keyof typeof recommend_sets>("office");
  //const products = useSelector((state: RootState) => state.products);
  useEffect(() => {
    if (router.query.category) {
      if (router.query.category.length === 1) {
        switch (router.query.category[0]) {
          case "office":
            setCategory(
              router.query.category[0] as keyof typeof recommend_sets
            );
            break;
          case "gaming":
            router.push("./gaming/lol");
            break;
          // case "task":
          //   router.push("./task/broadcast");
          //   break;
        }
      } else {
        setCategory(
          (router.query.category as string[]).join(
            "/"
          ) as keyof typeof recommend_sets
        );
      }
    }
  }, [router]);
  return (
    <>
      <Head>
        <title>추천견적 : 글카얼마</title>
        <link
          rel="preload"
          href="/_next/image?url=%2Foffice.webp&w=1920&q=75"
          as="image"
        />
        <link
          rel="preload"
          href="/_next/image?url=%2Fgaming_lol.webp&w=1920&q=75"
          as="image"
        />
        <link
          rel="preload"
          href="/_next/image?url=%2Fgaming_pubg.webp&w=1920&q=75"
          as="image"
        />
        <link
          rel="preload"
          href="/_next/image?url=%2Fgaming_cyberpunk.webp&w=1920&q=75"
          as="image"
        />
      </Head>
      {router.query.category && (
        <div className="flex w-full flex-col items-center bg-zinc-900 pb-10">
          <div className="flex w-full justify-evenly bg-gray-800 py-2 font-bold text-gray-100">
            <div
              className={`${
                router.query.category[0] === "office" && "text-yellow-300"
              } hover:cursor-pointer hover:underline`}
              onClick={() => router.push("./office")}
            >
              가정용/사무용PC
            </div>
            <div
              className={`${
                router.query.category[0] === "gaming" && "text-yellow-300"
              } hover:cursor-pointer hover:underline`}
              onClick={() => router.push("./gaming")}
            >
              게임용PC
            </div>
            {/* <div
              className={`${
                router.query.category[0] === "task" && "text-yellow-300"
              } hover:cursor-pointer hover:underline`}
              onClick={() => router.push("./task")}
            >
              방송용/작업용PC
            </div> */}
          </div>
          <div className="w-[1280px]">
            <div className="p-5 text-2xl font-bold text-white">
              {(() => {
                switch (router.query.category[0]) {
                  case "office":
                    return "가정용/사무용PC";
                  case "gaming":
                    return "게임용PC";
                  case "task":
                    return "방송용/작업용PC";
                }
              })()}
            </div>
            {(() => {
              switch (router.query.category[0]) {
                case "gaming":
                  return (
                    <div className="mb-5 flex space-x-[-1px] text-sm font-bold text-white">
                      <div
                        className="flex flex-1 items-center justify-center border border-gray-500 py-2 hover:cursor-pointer hover:bg-red-600"
                        onClick={() => router.push("./gaming/lol")}
                      >
                        리그오브레전드
                      </div>
                      <div
                        className="flex flex-1 items-center justify-center border border-gray-500 py-2 hover:cursor-pointer hover:bg-red-600"
                        onClick={() => router.push("./gaming/pubg")}
                      >
                        배틀그라운드
                      </div>
                      <div
                        className="flex flex-1 items-center justify-center border border-gray-500 py-2 hover:cursor-pointer hover:bg-red-600"
                        onClick={() => router.push("./gaming/cyberpunk")}
                      >
                        사이버펑크 2077
                      </div>
                    </div>
                  );
                case "task":
                  return (
                    <div className="mb-5 flex space-x-[-1px] text-sm font-bold text-white">
                      <div
                        className="flex flex-1 items-center justify-center border border-gray-500 py-2 hover:cursor-pointer hover:bg-red-600"
                        onClick={() => router.push("./gaming/lol")}
                      >
                        방송용PC
                      </div>
                      <div
                        className="flex flex-1 items-center justify-center border border-gray-500 py-2 hover:cursor-pointer hover:bg-red-600"
                        onClick={() => router.push("./gaming/pubg")}
                      >
                        영상편집용PC
                      </div>
                      <div
                        className="flex flex-1 items-center justify-center border border-gray-500 py-2 hover:cursor-pointer hover:bg-red-600"
                        onClick={() => router.push("./gaming/cyberpunk")}
                      >
                        3D작업용PC
                      </div>
                    </div>
                  );
              }
            })()}
            <Image
              src={`/${(router.query.category as string[]).join("_")}.webp`}
              alt={`${(router.query.category as string[]).join(
                "_"
              )} PC DESC 사진`}
              fill
              quality={75}
              className={`!static mb-5 !h-auto object-contain`}
            />
            <div className="mb-5 flex h-[40px] w-full space-x-[-1px] text-sm text-gray-600">
              <div
                className={`flex w-[130px] items-center justify-center border border-b-gray-400 hover:cursor-pointer ${
                  sort === "low"
                    ? "z-10 border-b-0 border-gray-400 font-bold text-gray-100"
                    : "border-gray-600"
                }`}
                onClick={() => setSort("low")}
              >
                낮은가격순
              </div>
              <div
                className={`flex w-[130px] items-center justify-center border border-b-gray-400 hover:cursor-pointer ${
                  sort === "high"
                    ? "z-10 border-b-0 border-gray-400 font-bold text-gray-100"
                    : "border-gray-600"
                }`}
                onClick={() => setSort("high")}
              >
                높은가격순
              </div>
              <div
                className={`flex w-[130px] items-center justify-center border border-b-gray-400 hover:cursor-pointer ${
                  sort === "new"
                    ? "z-10 border-b-0 border-gray-400 font-bold text-gray-100"
                    : "border-gray-600"
                }`}
                onClick={() => setSort("new")}
              >
                신상품순
              </div>
              <div className="box-content flex-1 items-center justify-center border-b border-gray-400" />
            </div>
            <div className="grid grid-cols-4 gap-6">
              {
                //products.length &&
                recommend_sets[category]
                  ?.sort((a, b) => {
                    switch (sort) {
                      case "low":
                        return (
                          a.parts
                            .map((part) => part.price)
                            .reduce((sum, cur) => sum + cur, 0) -
                          b.parts
                            .map((part) => part.price)
                            .reduce((sum, cur) => sum + cur, 0)
                        );
                      case "high":
                        return (
                          b.parts
                            .map((part) => part.price)
                            .reduce((sum, cur) => sum + cur, 0) -
                          a.parts
                            .map((part) => part.price)
                            .reduce((sum, cur) => sum + cur, 0)
                        );
                      default:
                        return (
                          a.parts
                            .map((part) => part.price)
                            .reduce((sum, cur) => sum + cur, 0) -
                          b.parts
                            .map((part) => part.price)
                            .reduce((sum, cur) => sum + cur, 0)
                        );
                    }
                  })
                  .map((set, idx) => (
                    <div
                      className="relative flex aspect-[9/12] flex-col border-zinc-900 bg-[#202129] outline outline-1 outline-zinc-700 hover:outline-zinc-200"
                      key={idx}
                    >
                      <Image
                        src={set.img}
                        alt={`사무용${idx + 1} PC 사진`}
                        width="1080"
                        height="240"
                      />
                      <div className="flex flex-1 flex-col justify-between p-3">
                        <div className="text-white">{set.desc}</div>
                        <div className="flex flex-col space-y-3 ">
                          <div className="relative bg-[#292A33] py-2 px-2 text-xs text-zinc-400">
                            {set.summary}
                            <div className="group absolute bottom-1 right-1 border border-gray-600 bg-slate-900 px-1 text-xs text-gray-300 hover:cursor-pointer hover:border-gray-400">
                              상세사양
                              <div className="absolute right-0 top-[24px] hidden flex-col items-end group-hover:flex">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-caret-up-fill absolute top-[-1px] text-gray-500"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                </svg>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-caret-up-fill z-10 text-[#292A33]"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                </svg>
                                <div className="absolute top-2 right-[-5px] w-[278px] whitespace-pre-wrap border border-gray-500 bg-[#292A33] p-2 text-xs">
                                  {set.parts
                                    .map((part) => "ㆍ " + part.name)
                                    .join("\n")}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-between">
                            <strong className="text-white">
                              {set.parts
                                .map((part) => part.price)
                                .reduce((sum, num) => sum + num, 29000)
                                .toLocaleString("kr") + "원"}
                            </strong>
                            <div
                              className="flex items-center justify-center bg-red-500 px-3 pb-2 pt-1 text-sm font-bold text-gray-100 duration-500 hover:cursor-pointer hover:bg-red-700"
                              onClick={() => {
                                Router.push({
                                  pathname: "/estimation",
                                  query: { parts: JSON.stringify(set.parts) },
                                });
                              }}
                            >
                              구매하기
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
              }
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Category;
