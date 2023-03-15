import ShowList from "../components/ShowList";
import showsData from "../shows-data";
function Home() {
  return (
    <div>
      <ShowList shows={showsData} />
      <h2>This is the Home page</h2>
    </div>
  );
}
export default Home;
