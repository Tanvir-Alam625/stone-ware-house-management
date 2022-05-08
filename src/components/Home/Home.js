import About from "../About/About";
import Banner from "../Banner/Banner";
import InventoryForHomePage from "../Inventory/InventoryForHomePage";
import MyHelmet from "../MyHelmet/MyHelmet";
const Home = () => {
  return (
    <div>
      <MyHelmet title="Home" />
      <Banner />
      <About />
      <InventoryForHomePage />
    </div>
  );
};

export default Home;
