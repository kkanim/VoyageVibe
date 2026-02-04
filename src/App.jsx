import Header from "../components/Header";
import Entry from "../components/Entry"
import Data from "../src/data"

export default function App() {
  const entryElement = Data.map((data) => {
    return <Entry 
    key = {data.id}
    {...data}
    />
  })
  
  return(
    <>
      <Header />
      <main className="container">
        {entryElement}
      </main>
    </>
  )
}