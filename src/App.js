import "./App.css";
import ResponsiveCardScreen from "./screen/ResponsiveCard";
import VerticalCardScreen from "./screen/VerticalCard";
import AspectRatioCardScreen from "./screen/AspectRatioCard";
import ToggleButton from "./utility/darkModeToggle";
const App = () => {
  return (
    <div>
      <div className="fixed bottom-2 right-0 mr-14 z-50 ">
        <ToggleButton />
      </div>
      {/*       
      <h1 className="text-4xl ml-14 mt-8 dark:text-gray-100">
        Responsive Card Screen
      </h1>
      <ResponsiveCardScreen></ResponsiveCardScreen>
      <h1 className="text-4xl ml-14 mt-8 dark:text-gray-100">
        Vertical Card Screen
      </h1>
      <VerticalCardScreen></VerticalCardScreen>
       */}
      <AspectRatioCardScreen />
    </div>
  );
};
const App_1 = () => {
  return <div></div>;
};
export default App;
