import SearchKeywordList from "@/components/SearchKeywordList";
import { regEscape } from "@/libs/reg";
import { RootState } from "@/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  CartItem,
  CartType,
  Category,
  Filter,
  ProdType,
  Service,
  Sort,
} from "@/types";
import Cart from "@/components/Cart";
import ProductList from "@/components/ProductList";
import CompareProducts from "@/components/CompareProducts";
import EstimationSearchBar from "@/components/EstimationSearchBar";

const Estimation = () => {
  const router = useRouter();
  const products = useSelector((state: RootState) => state.products);
  const [category, setCategory] = useState<Category>(
    router.query.product
      ? JSON.parse(router.query.product as string).category
      : Category.cpu
  );
  const [input, setInput] = useState<string>("");
  const [search, _setSearch] = useState<string>(
    router.query.product ? JSON.parse(router.query.product as string).name : ""
  );
  const setSearch = (search: string) => {
    _setSearch(search);
    setInput("");
  };
  const [filter, setFilter] = useState<Array<string>>([]);

  const [sort, setSort] = useState<Sort>(Sort.NEW);
  const [categorizedProducts, setCategorizedProducts] = useState<ProdType[]>(
    []
  );
  const [resultProducts, setResultProducts] = useState<ProdType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [compareList, setCompareList] = useState<ProdType[]>([]);
  const [cart, setCart] = useState<CartType>({
    ...Object.assign(
      {},
      ...Object.values(Category).map((CAT) => ({
        [CAT]: new Map<string, CartItem>(),
      }))
    ),
    service: { ...Service.none, count: 0 },
  });
  // useEffect(() => {
  //   console.log();
  // }, []);
  useEffect(() => {
    setCategory(
      router.query.product
        ? JSON.parse(router.query.product as string).category
        : Category.cpu
    );
    setSearch(
      router.query.product
        ? JSON.parse(router.query.product as string).name
        : ""
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query]);
  useEffect(() => {
    movePage(1);
    if (products.length > 0) {
      let result: ProdType[];
      result = products.filter((product) => product.category === category);
      setCategorizedProducts([...result]);
      result = result.filter((product) =>
        product.name.match(new RegExp(regEscape(search), "i"))
      );
      switch (sort) {
        case Sort.LOW_PRICE:
          result.sort((a, b) => a.price - b.price);
          break;
        case Sort.HIGH_PRICE:
          result.sort((a, b) => b.price - a.price);
          break;
        case Sort.NAME:
          result.sort((a, b) =>
            a.name < b.name ? -1 : a.name > b.name ? 1 : 0
          );
          break;
        default:
          result.sort((a, b) => (a._id < b._id ? -1 : a._id > b._id ? 1 : 0));
          break;
      }
      if (filter.length >= 1) {
        result = result.filter((p) => p.type && filter.includes(p.type));
      }
      // console.log(result);
      setResultProducts([...result]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products, search, category, sort, filter]);
  useEffect(() => {
    document.querySelector(`#page_${page}`)?.setAttribute("data-cur", "");
  }, [resultProducts, page]);
  // useEffect(() => {
  //   console.log(Object.values(cart));
  // }, [cart]);
  useEffect(() => {
    setSearch("");
    // console.log(category);
  }, [category]);
  const toggleFilter = (id: string) => {
    const checkbox = document.querySelector(
      `#filter #${id.replaceAll(" ", "")}`
    );
    checkbox?.toggleAttribute("data-checked");
    if (checkbox?.hasAttribute("data-checked")) {
      setFilter((filter) => [...filter, id]);
    } else {
      setFilter((filter) => filter.filter((el) => el !== id));
    }
  };
  const toggleCompareList = (p: ProdType) => {
    const p_checkbox = document.querySelector(`#itemList_checkbox_${p._id}`);
    if (p_checkbox?.getAttribute("data-checked") !== "true") {
      setCompareList((prevList) => [...prevList, p]);
    } else {
      setCompareList((prevList) => prevList.filter((pp) => p._id !== pp._id));
    }
  };
  const movePage = (p: number) => {
    document.querySelector(`#page_${page}`)?.removeAttribute("data-cur");
    document.querySelector(`#page_${p}`)?.setAttribute("data-cur", "");
    setPage(p);
  };
  return (
    <div className="mt-10 flex w-[1260px] space-x-3">
      <div className="flex w-[800px] flex-col">
        {/* 검색창 */}
        <EstimationSearchBar
          input={input}
          setInput={setInput}
          search={search}
          setSearch={setSearch}
          categorizedProducts={categorizedProducts}
        />
        {/* 필터 */}
        <div className="mb-3 flex w-full flex-col rounded-sm border border-gray-400">
          <div className="flex w-full items-center space-x-2 border border-b bg-slate-100 py-2 pl-5">
            <div className="font-bold">{category}</div>
            <div className="flex space-x-1 text-xs">
              <div>{search && `"${search}"단어를 포함하는 `}상품개수: </div>
              <div className="font-semibold">{resultProducts.length}개</div>
            </div>
          </div>
          {Object.keys(Filter).includes(category) && (
            <div className="m-3 flex text-sm" id="filter">
              <div className="w-32 flex-shrink-0 font-bold">
                {Filter[category as keyof typeof Filter].by}
              </div>
              <div className="grid w-full grid-cols-4">
                {Filter[category as keyof typeof Filter].list.map((type) => (
                  <div
                    className="group flex items-center space-x-2 hover:cursor-default"
                    id={type.replaceAll(" ", "")}
                    key={type}
                    onClick={() => toggleFilter(type)}
                  >
                    <div className="h-4 w-4 border border-gray-300 group-data-[checked]:border-orange-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="hidden h-full w-full text-orange-600 group-data-[checked]:block"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <div className="mb-[1px] group-hover:underline group-data-[checked]:font-bold">
                      {type}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* 정렬 */}
        <div
          className="group box-content flex w-full border-b border-gray-900"
          id="sort"
          data-select={sort}
        >
          <div
            className="-mb-[1px] -mr-[1px] box-content flex w-[120px] justify-center border border-gray-400 border-b-gray-900 py-2 text-sm text-gray-800 hover:cursor-pointer hover:underline group-data-[select=new]:z-10 group-data-[select=new]:border-gray-900 group-data-[select=new]:border-b-white group-data-[select=new]:font-bold"
            onClick={() => setSort(Sort.NEW)}
          >
            신상품순
          </div>
          <div
            className="-mb-[1px] -mr-[1px] box-content flex w-[120px] justify-center border border-gray-400 border-b-gray-900 py-2 text-sm text-gray-800 hover:cursor-pointer hover:underline group-data-[select=lowPrice]:z-10 group-data-[select=lowPrice]:border-gray-900 group-data-[select=lowPrice]:border-b-white group-data-[select=lowPrice]:font-bold"
            onClick={() => setSort(Sort.LOW_PRICE)}
          >
            낮은 가격순
          </div>
          <div
            className="-mb-[1px] -mr-[1px] box-content flex w-[120px] justify-center border border-gray-400 border-b-gray-900 py-2 text-sm text-gray-800 hover:cursor-pointer hover:underline group-data-[select=highPrice]:z-10 group-data-[select=highPrice]:border-gray-900 group-data-[select=highPrice]:border-b-white group-data-[select=highPrice]:font-bold"
            onClick={() => setSort(Sort.HIGH_PRICE)}
          >
            높은 가격순
          </div>
          <div
            className="-mb-[1px] -mr-[1px] box-content flex w-[120px] justify-center border border-gray-400 border-b-gray-900 py-2 text-sm text-gray-800 hover:cursor-pointer hover:underline group-data-[select=name]:z-10 group-data-[select=name]:border-gray-900 group-data-[select=name]:border-b-white group-data-[select=name]:font-bold"
            onClick={() => setSort(Sort.NAME)}
          >
            상품명순
          </div>
        </div>
        {/* 아이템목록 */}
        <ProductList
          resultProducts={resultProducts}
          page={page}
          compareList={compareList}
          toggleCompareList={toggleCompareList}
          cart={cart}
          setCart={setCart}
        />
        {/* 상품비교 */}
        <CompareProducts
          compareList={compareList}
          toggleCompareList={toggleCompareList}
          cart={cart}
          setCart={setCart}
        />
        {/* 페이지 */}
        <div
          className="flex h-[50px] items-center justify-center space-x-2 border border-t-0 border-gray-900"
          id="pageList"
        >
          {page > 10 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 text-gray-600 hover:cursor-pointer"
              onClick={() => {
                movePage(page - ((page - 1) % 10) - 1);
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          )}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => {
            const p = Math.floor((page - 1) / 10) * 10 + n;
            if (resultProducts.length > p * 30)
              return (
                <div
                  className="mb-[1px] flex h-7 w-7 items-center justify-center rounded-md border-gray-400 text-sm text-gray-700 hover:cursor-pointer hover:underline data-[cur]:border data-[cur]:font-bold"
                  onClick={() => movePage(p)}
                  key={p}
                  id={`page_${p}`}
                >
                  {p}
                </div>
              );
          })}
          {resultProducts.length > (page - ((page - 1) % 10) - 1 + 10) * 30 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 text-gray-600 hover:cursor-pointer"
              onClick={() => {
                movePage(page - ((page - 1) % 10) - 1 + 11);
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          )}
        </div>
      </div>
      <Cart
        category={category}
        setCategory={setCategory}
        cart={cart}
        setCart={setCart}
      />
    </div>
  );
};

export default Estimation;
