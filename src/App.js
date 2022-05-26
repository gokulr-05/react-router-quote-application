import { Route, Routes, Navigate, Link } from "react-router-dom";
import MainHeader from "./component/Mainheader";
import NewQuote from "./pages/NewQuote";
import AllQuote from "./pages/AllQuote";
import QuoteDetail from "./pages/QuoteDetail";
import Comments from "./pages/Comments";
import NotFound from "./pages/NotFound";
import LoadComment from "./pages/LoadComment";

let App = () => {
  return (
    <div>
      <MainHeader />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Navigate to="/quote" replace />} />
        <Route path="/quote/*" element={<AllQuote />}></Route>
        <Route path="/quote/:quoteID/*" element={<QuoteDetail />}>
          <Route path="" element={<LoadComment />} />
          <Route path=":comments" element={<Comments />} />
        </Route>

        <Route path="/newquote" element={<NewQuote />} />
      </Routes>
    </div>
  );
};

export default App;
