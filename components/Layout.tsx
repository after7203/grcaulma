import Footer from "./Footer";
import Header from "./Header";

type ComponentProps = { children: React.ReactNode };

const Layout = ({ children }: ComponentProps) => {
  return (
    <div>
      <Header />
      <main className="flex justify-center">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
