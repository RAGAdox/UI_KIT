import "./App.css";
import ResponsiveCardScreen from "./screen/ResponsiveCard";
import VerticalCardScreen from "./screen/VerticalCard";
import AspectRatioCardScreen from "./screen/AspectRatioCard";
import ToggleButton from "./utility/darkModeToggle";
import Navbar from "./components/navbar";
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="fixed bottom-2 right-0 mr-14 z-50 ">
        <ToggleButton />
      </div>

      <h1 className="text-4xl ml-14 mt-8 dark:text-gray-100">
        Responsive Card Screen
      </h1>
      <ResponsiveCardScreen></ResponsiveCardScreen>
      <h1 className="text-4xl ml-14 mt-8 dark:text-gray-100">
        Vertical Card Screen
      </h1>
      <VerticalCardScreen></VerticalCardScreen>
      <h1 className="text-4xl ml-14 mt-8 dark:text-gray-100">
        Square Divs Screen
      </h1>
      <AspectRatioCardScreen />

      {/* <iframe
        src="https://open.spotify.com/embed/track/5FdCKcB5i41pzuz3XgGnlf"
        width="300"
        height="380"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe> */}
    </div>
  );
};
const App_1 = () => {
  return <div></div>;
};
export default App;
