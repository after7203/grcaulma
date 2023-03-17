import Image from "next/image";
import Logo from "/assets/logo-gray-scale.png";

const Footer = () => {
  return (
    <footer className="flex w-full justify-center p-10">
      <div className="w-[1260px] flex space-x-10">
        <Image src={Logo} alt={"로고"} className="object-none" />
        <div className="text-xs flex flex-col text-gray-500">
          <div className="font-bold text-gray-700 mb-5">(주)글카얼마</div>
          <p className="leading-5 mb-5">
            주소 079XX 서울특별시 XX구 XX로 XXX-X · 대표: 오승현 <br />·
            사업자번호: XXX-XX-XXXXX · 통신판매업 제XXXX-XXXX-XXXXX호 <br />·
            부가통신사업: 제XXXXXX호 <br />
            <br />
            (주)글카얼마는 존재하지않는 회사입니다 하하
          </p>
          <div className="text-[8px]">
            Copyright © <span className="font-bold">grcaulma</span> Co., Ltd.
            All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
