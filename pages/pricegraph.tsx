import Chart from "@/components/Chart";
import Head from "next/head";
import price from "@/data/price";
import { useEffect, useState } from "react";
import performance from "@/data/performance";

const Pricegraph = () => {
  const [resolution, setresolution] = useState<"FHD" | "QHD" | "UHD">("FHD");
  const [filter, setfilter] = useState(
    Object.values(price).map((value) => value.id)
  );
  const [sort, setsort] = useState<"performance" | "cost-effective">(
    "performance"
  );
  return (
    <>
      <Head>
        <title>가격그래프 : 글카얼마</title>
      </Head>
      <div className="flex w-[1260px] flex-col rounded-lg border">
        <div className="border-b px-7 py-4 font-bold text-gray-800">
          그래픽카드
        </div>
        <div
          className="mx-5 mt-5 flex h-[30px] w-[110px] items-center justify-center border bg-white py-1 text-xs font-bold text-gray-800 duration-200 hover:cursor-pointer hover:bg-slate-100"
          onClick={() => {
            filter.length === price.length
              ? setfilter([])
              : setfilter(Object.values(price).map((value) => value.id));
          }}
        >
          전체선택/해제
        </div>
        <div className="mx-5 my-4 flex space-x-3">
          {Object.values(price)
            .map((value) => value.id)
            .map((name) => (
              <div
                className={`whitespace-nowrap rounded-full border py-[7px] px-4 text-xs font-bold hover:cursor-pointer ${
                  filter.includes(name)
                    ? "bg-[#154d5f] text-white"
                    : "text-gray-600 hover:text-gray-800"
                }`}
                key={name}
                onClick={() => {
                  filter.includes(name)
                    ? setfilter((filter) => filter.filter((el) => el !== name))
                    : setfilter((filter) => [...filter, name]);
                }}
              >
                {name}
              </div>
            ))}
        </div>
        <div className="mx-6 mt-5 text-xs font-bold text-gray-800">
          단위: 만원
        </div>
        <div className="mt-[-20px] mb-20 h-[800px] shrink-0">
          <Chart price={price.filter((el) => filter.includes(el.id))} />
        </div>
        <div className="flex flex-col">
          <div className="m-auto flex w-1/2 justify-center divide-x border">
            <div
              className={`flex flex-1 items-center justify-center p-2 text-gray-800 ${
                resolution === "FHD"
                  ? "pointer-events-none bg-blue-500 font-bold text-white"
                  : "hover:cursor-pointer hover:bg-slate-100"
              }`}
              onClick={() => setresolution("FHD")}
            >
              FHD
            </div>
            <div
              className={`flex flex-1 items-center justify-center p-2 text-gray-800 ${
                resolution === "QHD"
                  ? "pointer-events-none bg-blue-500 font-bold text-white"
                  : "hover:cursor-pointer hover:bg-slate-100"
              }`}
              onClick={() => setresolution("QHD")}
            >
              QHD
            </div>
            <div
              className={`flex flex-1 items-center justify-center p-2 text-gray-800 ${
                resolution === "UHD"
                  ? "pointer-events-none bg-blue-500 font-bold text-white"
                  : "hover:cursor-pointer hover:bg-slate-100"
              }`}
              onClick={() => setresolution("UHD")}
            >
              UHD
            </div>
          </div>
          {/* 가성비표 */}
          <div className="m-auto my-4 w-3/4 overflow-hidden rounded-lg border border-slate-300">
            <table className="w-full border-collapse text-center">
              <thead className="border-b">
                <tr className={`h-8 text-sm font-medium text-gray-400`}>
                  <th className="">순위</th>
                  <th className="">칩셋</th>
                  <th
                    className={`hover:cursor-pointer hover:text-blue-500 ${
                      sort === "performance"
                        ? "border-b-2 border-b-blue-500 text-blue-500"
                        : ""
                    }`}
                    onClick={() => setsort("performance")}
                  >
                    게임 상대 성능
                  </th>
                  <th
                    className={`hover:cursor-pointer hover:text-blue-500 ${
                      sort === "cost-effective"
                        ? "border-b-2 border-b-blue-500 text-blue-500"
                        : ""
                    }`}
                    onClick={() => setsort("cost-effective")}
                  >
                    가성비(성능1%당)
                  </th>
                </tr>
              </thead>
              <tbody className="border-collapse-[initial] divide-y text-sm text-gray-700">
                {Object.entries(performance)
                  .sort(([a_key, a_value], [b_key, b_value]) => {
                    switch (sort) {
                      case "performance":
                        return b_value[resolution] - a_value[resolution];
                      case "cost-effective":
                        return (
                          price.find((el) => el.id === a_key)!.data[11].y /
                            a_value[resolution] -
                          price.find((el) => el.id === b_key)!.data[11].y /
                            b_value[resolution]
                        );
                      default:
                        return 0;
                    }
                  })
                  .map(([key, value], idx) => {
                    return (
                      <tr key={idx} className="h-10">
                        <td className="">{idx + 1}</td>
                        <td className="">{key}</td>
                        <td
                          className={`${
                            sort === "performance"
                              ? "bg-slate-100 text-black"
                              : ""
                          }`}
                        >
                          {(value[resolution] * 100).toFixed(1) + "%"}
                        </td>
                        <td
                          className={`${
                            sort === "cost-effective"
                              ? "bg-slate-100 text-black"
                              : ""
                          }`}
                        >
                          {value[resolution] !== 0
                            ? (
                                (price.find((el) => el.id === key)!.data[11].y *
                                  10000) /
                                (value[resolution] * 100)
                              ).toFixed(0) + "원"
                            : "구동불가"}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricegraph;
