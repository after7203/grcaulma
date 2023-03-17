import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import Logo from "/assets/logo.png";
import LogoText from "/assets/logo_text.png";

const Header = () => {
  return (
    <header className="mb-5 flex flex-col items-center">
      <div className="mt-10 mb-8 flex items-center justify-center space-x-10">
        <Link href={"/"} className="ml-[-100px] flex items-center">
          <Image src={Logo} height={50} alt={"로고 이미지"} priority />
          <Image src={LogoText} height={30} alt={"로고 이미지"} priority />
        </Link>
        <div className="flex h-[52px] w-[380px] items-center rounded-sm border border-amber-300 px-5">
          <input
            type="text"
            className="flex-1 leading-[50px] focus-visible:outline-none"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            className="text-amber-500"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>
        <div className="flex justify-center text-xs text-gray-400">
          <div className="border-r px-2">로그인</div>
          <div className="border-r px-2">회원가입</div>
          <div className="border-r px-2">마이글카</div>
          <div className="px-2">고객지원</div>
        </div>
      </div>
      <Navbar></Navbar>
    </header>
  );
};

export default Header;
