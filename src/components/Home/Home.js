import About from "../About/About";
import Banner from "../Banner/Banner";
import InventoryForHomePage from "../Inventory/InventoryForHomePage";
import MyHelmet from "../MyHelmet/MyHelmet";
import Subscribe from "../Subscribe/Subscribe";
const Home = () => {
  return (
    <div>
      <MyHelmet title="Home" />
      <Banner />
      <About />
      <InventoryForHomePage />
      <Subscribe />
    </div>
  );
};

export default Home;
