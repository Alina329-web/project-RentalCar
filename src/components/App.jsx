import "./App.css";
import Baner from "./Baner/Baner";
import Heder from "./Heder/Heder";
import FeedbackForm from "./Catalog/Catalog";

function App() {
  return (
    <>
      <div>
        <Heder />
        <Baner />
      </div>
      <FeedbackForm />
    </>
  );
}

export default App;
