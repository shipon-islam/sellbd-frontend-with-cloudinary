import { gapi } from "gapi-script";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Routers from "./Routes/Routers";
function App() {
  const { product,wishlist } = useSelector((state) => state.cardList);
  useEffect(() => {
    //save card item and wishlist in localstorage
    window.localStorage.setItem("item", JSON.stringify(product));
    window.localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [product, wishlist]);


  // google auth login
  gapi.load("client:auth2", () => {
    gapi.client.init({
      clientId:
        "343936071408-obrb4v65plpvd3f3v1qufcb2bq70nf14.apps.googleusercontent.com",
      plugin_name: "chat",
    });
  });

  return (
    <div className="max-w-[1440px] mx-auto">
      <Routers />
    </div>
  );
}

export default App;
