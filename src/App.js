// do multiple targets
// do adjacency list option (tree looking graph) --- two routes (/list and /matrix)
// 

import Nav from "./components/Nav"
import Matrix from "./components/Matrix";
import Footer from "./components/Footer";
import Guide from "./components/Guide";

function App() {
  return (
    <>
      <Nav />
      <Guide />
      <Matrix />
      <Footer />
    </>
  );
}

export default App;
