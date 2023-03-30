import { regEscape } from "@/libs/reg";
import { ProdType } from "@/pages/api/products";
import { useEffect } from "react";

type PropsType = {
  prods: ProdType[];
  search: string;
  onClick: (prod: ProdType) => void;
};

const SearchKeywordList = ({ prods, search, onClick }: PropsType) => {
  // useEffect(() => {
  //   console.log(prods);
  // }, [prods]);
  if (prods.length > 0) {
    const filtered_prods = prods
      .filter((prod) => prod.name.match(new RegExp(regEscape(search), "i")))
      .slice(0, 10);
    if (filtered_prods.length > 0) {
      return (
        <>
          {filtered_prods.map((product) => {
            let curIndex = 0;
            return (
              <div
                key={product._id}
                className="overflow-hidden text-ellipsis whitespace-nowrap px-5 text-sm hover:cursor-pointer hover:bg-gray-100"
                onMouseDown={() => onClick(product)}
              >
                {(() => {
                  const words = product.name.split(
                    new RegExp(regEscape(search), "ig")
                  );
                  return words.map((word, idx) => {
                    const searchIdx = product.name
                      .toLowerCase()
                      .indexOf(search.toLowerCase(), curIndex);
                    if (idx !== words.length - 1)
                      return (
                        <span key={idx}>
                          <span>{word}</span>
                          <span className="text-red-600">
                            {product.name.substr(searchIdx, search.length)}
                          </span>
                        </span>
                      );
                    else return <span>{word}</span>;
                  });
                })()}
              </div>
            );
          })}
        </>
      );
    } else
      return (
        <div className="px-5 text-sm font-bold text-gray-700">
          해당 단어 관련 추천어가 없습니다.
        </div>
      );
  } else {
    return <></>;
  }
};

export default SearchKeywordList;
