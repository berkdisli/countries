import Header from "../layouts/Header";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import { NotFound } from "../pages";
import { Footer } from "../layouts";

const BrowserRouter = require("react-router-dom").BrowserRouter;
const Routes = require("react-router-dom").Routes;
const Route = require("react-router-dom").Route;

function Index() {
  return (
    <div className="Index">
            <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/detail/:cca3" element= {<Detail /> }/>
          <Route path="/" element= {<Home /> }/>
          <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer/>
      </BrowserRouter>
    </div>

  );
}

export default Index;
