import Chart from "@/components/Chart";
import Head from "next/head";
import price from "@/data/price";
import { useState } from "react";

const Pricegraph = () => {
  const [filter, setfilter] = useState(
    Object.values(price).map((value) => value.id)
  );
  return (
    <>
      <Head>
        <title>가격그래프 : 글카얼마</title>
      </Head>
      <div className="flex h-[700px] w-[1260px] flex-col rounded-lg border">
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
        <div className="mt-[-20px] flex-1">
          <Chart price={price.filter((el) => filter.includes(el.id))} />
        </div>
      </div>
    </>
  );
};

export default Pricegraph;
