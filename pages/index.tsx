import Carousel from "@/components/Carousel";
import Chart from "@/components/Chart";
import performance from "@/data/performance";
import price from "@/data/price";
import { Inter } from "next/font/google";
import Head from "next/head";
import router from "next/router";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>글카얼마 : 그래픽카드 시세가 궁금해?</title>
      </Head>
      <div className="flex flex-col">
        <Carousel />
        <div className="my-5 flex h-[400px] space-x-5">
          <div
            className="h-full w-[60%] border hover:cursor-pointer hover:shadow-lg"
            onClick={() => router.push("/pricegraph")}
          >
            <Chart
              price={price.filter((el) =>
                ["GTX 1660 SUPER", "RTX 3060 Ti", "RTX 3080"].includes(el.id)
              )}
              useMesh={false}
            />
          </div>
          <table
            className="flex-1 border-collapse border text-center hover:cursor-pointer hover:shadow-lg"
            onClick={() => router.push("/pricegraph")}
          >
            <thead className="border-b">
              <tr className={`h-8 text-sm font-medium text-gray-400`}>
                <th className="w-1/4">순위</th>
                <th className="w-1/4">칩셋</th>
                <th className="w-1/4">게임 상대 성능</th>
                <th className={`border-b-2 border-b-blue-500 text-blue-500`}>
                  가성비(성능1%당)
                </th>
              </tr>
            </thead>
            <tbody className="border-collapse-[initial] divide-y text-sm text-gray-700">
              {Object.entries(performance)
                .sort(
                  ([a_key, a_value], [b_key, b_value]) =>
                    price.find((el) => el.id === a_key)!.data[11].y /
                      a_value["FHD"] -
                    price.find((el) => el.id === b_key)!.data[11].y /
                      b_value["FHD"]
                )
                .slice(0, 5)
                .map(([key, value], idx) => {
                  return (
                    <tr key={idx} className="h-10">
                      <td className="">{idx + 1}</td>
                      <td className="">{key}</td>
                      <td>{(value["FHD"] * 100).toFixed(1) + "%"}</td>
                      <td className={`bg-slate-100 text-black`}>
                        {value["FHD"] !== 0
                          ? (
                              (price.find((el) => el.id === key)!.data[11].y *
                                10000) /
                              (value["FHD"] * 100)
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
    </>
  );
}
