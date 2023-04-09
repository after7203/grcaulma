import { GFLOPS } from "@/data/performance";
import Head from "next/head";

const rank = () => {
  return (
    <>
      <Head>
        <title>가격그래프 : 글카얼마</title>
      </Head>
      <div className="flex w-[1260px] flex-col rounded-lg border">
        <div className="mb-5 border-b px-7 py-4 font-bold text-gray-800">
          그래픽카드
        </div>
        <div className="m-auto my-4 w-3/4 overflow-hidden rounded-lg border border-slate-300">
          <table className="w-full border-collapse text-center">
            <thead className="border-b">
              <tr className={`h-8 text-sm font-medium text-gray-400`}>
                <th className="">칩셋</th>
                <th className="">출시일</th>
                <th>아키텍쳐</th>
                <th>쉐이더</th>
                <th>클럭속도</th>
                <th className="text-blue-500">GFLOPS</th>
              </tr>
            </thead>
            <tbody className="border-collapse-[initial] divide-y text-sm text-gray-700">
              {GFLOPS.map((el, idx) => (
                <tr key={idx} className="h-10">
                  <td className="">{el[0]}</td>
                  <td className="">{el[1]}</td>
                  <td className="">{el[2]}</td>
                  <td className="">{el[3]}</td>
                  <td className="">{el[4]}</td>
                  <td className="bg-slate-100 text-black">{el[5]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default rank;
