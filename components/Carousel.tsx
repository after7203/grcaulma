import Image from "next/image";
import Ex from "/assets/ex.jpeg";

const Carousel = () => {
  return (
    <div className="h-[420px] w-full bg-slate-100 flex justify-center">
      <div className="w-[1260px] flex flex-col items-center justify-center">
        <div className="flex w-full mb-5 space-x-10 justify-center text-stone-700">
          <div>사무용PC</div>
          <div>게임용PC</div>
          <div>방송용PC</div>
          <div>작업용PC</div>
          <div>글카별PC</div>
        </div>
        <div className="flex w-full space-x-10 justify-center">
          <Image src={Ex} alt={"예시"} />
          <Image src={Ex} alt={"예시"} />
          <Image src={Ex} alt={"예시"} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
