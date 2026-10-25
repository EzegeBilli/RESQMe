import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const RootLayout = () => {
  const navigation = useNavigation();

  const isNavigating =
    navigation.state === "loading" ||
    navigation.state === "submitting";

  return (
    <>
      <Navbar />

      <Loader
        isLoading={isNavigating}
        progressStage={2}
        message="Loading next page..."
      />

      <Outlet />

      <Footer />
    </>
  );
};

export default RootLayout;