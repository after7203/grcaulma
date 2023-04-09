import Footer from "./Footer";
import Header from "./Header";
import AsideMenu from "./AsideMenu";

type ComponentProps = { children: React.ReactNode };

const Layout = ({ children }: ComponentProps) => {
  return (
    <div className="whitespace-pre-wrap">
      <Header />
      <div>
        <AsideMenu />
        <main className="flex justify-center">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
