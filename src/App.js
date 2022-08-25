// do multiple targets
// do adjacency list option (tree looking graph) --- two routes (/list and /matrix)
// 

import Nav from "./components/Nav"
import Matrix from "./components/Matrix";
import Footer from "./components/Footer";
// import List from "./components/List";

function App() {
  return (
    <>
      <Nav />
      <Matrix />
      {/* <List /> */}
      <Footer />
    </>
  );
}

export default App;
