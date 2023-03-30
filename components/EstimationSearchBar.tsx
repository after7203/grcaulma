import { ProdType } from "@/types";
import { Dispatch, SetStateAction } from "react";
import SearchKeywordList from "./SearchKeywordList";

type PropsEstimationSearchBar = {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  search: string;
  setSearch: (search: string) => void;
  categorizedProducts: ProdType[];
};

const EstimationSearchBar = ({
  input,
  setInput,
  search,
  setSearch,
  categorizedProducts,
}: PropsEstimationSearchBar) => {
  return (
    <div className="mb-3 flex h-[40px]">
      <div className="relative flex w-full items-center rounded-sm border border-rose-600 pl-5">
        <input
          type="text"
          className="peer flex-1 leading-[38px] focus-visible:outline-none"
          placeholder="상품명을 검색하세요"
          value={input}
          id="searchInput"
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              setSearch(input);
              e.currentTarget.blur();
            }
          }}
          onChange={(e) => setInput(e.target.value)}
        />
        <div
          className="flex h-[40px] w-[40px] items-center justify-center bg-rose-600 hover:cursor-pointer"
          onClick={() => {
            setSearch(input);
          }}
        >
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
        {input && (
          <div className="absolute left-[-1px] top-[39px] z-20 hidden h-[270px] w-[calc(100%-40px)] space-y-1 border bg-white py-3 shadow-lg peer-focus:block">
            <SearchKeywordList
              prods={categorizedProducts}
              search={input}
              onClick={(prod) => setSearch(prod.name)}
            />
          </div>
        )}
      </div>
      {search && (
        <div
          className="group ml-3 flex w-[140px] items-center justify-center space-x-1 border border-gray-400 hover:cursor-pointer"
          onClick={() => {
            setSearch("");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-clockwise"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
            />
            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
          </svg>
          <div className="whitespace-nowrap text-sm text-gray-600 group-hover:underline">
            검색 초기화
          </div>
        </div>
      )}
    </div>
  );
};

export default EstimationSearchBar;
