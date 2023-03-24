import Header from "../layouts/Header";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import { NotFound } from "../pages";
import Favorites from "../pages/Favorites";

const BrowserRouter = require("react-router-dom").BrowserRouter;
const Routes = require("react-router-dom").Routes;
const Route = require("react-router-dom").Route;

function Index() {
  return (
    <div className="Index">
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element= {<Home /> }/>
          <Route path="/detail/:cca3" element= {<Detail /> }/>
          <Route path='/favorites' element={<Favorites />} />
          <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </div>

  );
}

export default Index;
