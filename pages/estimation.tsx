import Image from "next/image";

const estimation = () => {
  return (
    <div className="mt-10 w-[1260px]">
      <div className="w-[800px]">
        <div className="mb-3 flex h-[40px] w-full items-center rounded-sm border border-rose-600 pl-5">
          <input
            type="text"
            className="flex-1 leading-[38px] focus-visible:outline-none"
            placeholder="상품명을 검색하세요"
          />
          <div className="flex h-[40px] w-[40px] items-center justify-center bg-rose-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="text-white"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </div>
        </div>
        <div className="flex w-full flex-col rounded-sm border border-gray-400">
          <div className="flex w-full items-center space-x-2 border border-b bg-slate-100 py-2 pl-5">
            <div className="font-bold">CPU</div>
            <div className="flex space-x-1 text-xs">
              <div>상품개수: </div>
              <div className="font-semibold">916개</div>
            </div>
          </div>
          <div className="m-3 flex text-sm">
            <div className="w-32 font-bold">제조사</div>
            <div className="flex space-x-10">
              <div className="flex items-center space-x-2">
                <div className="border- h-4 w-4 border" />
                <div>인텔</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1"></div>
    </div>
  );
};

export default estimation;
