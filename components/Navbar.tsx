import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex w-[1260px] space-x-10">
      <Link href={"/estimation"}>
        <div className="flex justify-center font-bold text-slate-900 hover:cursor-pointer hover:underline">
          PC견적
        </div>
      </Link>
      <Link href={"/recommend/office"}>
        <div className="flex justify-center font-bold text-slate-900 hover:cursor-pointer hover:underline">
          용도별추천견적
        </div>
      </Link>
      {/* <div className="flex justify-center font-bold text-slate-900 hover:cursor-pointer hover:underline">
        글카별추천견적
      </div> */}
      <Link href={"/pricegraph"}>
        <div className="flex justify-center font-bold text-slate-900 hover:cursor-pointer hover:underline">
          가격그래프
        </div>
      </Link>
      <div className="flex justify-center font-bold text-slate-900 hover:cursor-pointer hover:underline">
        글카성능순위
      </div>
      <div className="flex justify-center font-bold text-slate-900 hover:cursor-pointer hover:underline">
        자유게시판
      </div>
    </div>
  );
};

export default Navbar;
