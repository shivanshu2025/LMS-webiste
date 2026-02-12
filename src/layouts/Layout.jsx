import { Children } from "react";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";

function PublicLayout({ children }) {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 p-6 bg-slate-100">
       {children}
      </main>
      <Footer />
    </>
  );
}

export default PublicLayout;
