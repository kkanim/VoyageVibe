import Header from "../components/Header";
import Entry from "../components/Entry"
import Data from "../src/data"

export default function App() {
  const entryElement = Data.map((data) => {
    return <Entry 
    img = {data.img}
    title = {data.title}
    country = {data.country}
    googleMapLink = {data.googleMapsLink}
    dates = {data.dates}
    text = {data.text}
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