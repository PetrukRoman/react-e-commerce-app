import Footer from "../../components/Footer/Footer";
import MainNavigation from "../../components/MainNavigation/MainNavigation";

const NotFoundPage = () => {
  return (
    <>
      <MainNavigation />
      <main
        style={{
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            textAlign: "center",
          }}
        >
          <h1>Oops...</h1>
          <p>Sorry! The page you are looking for was not found.</p>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default NotFoundPage;
