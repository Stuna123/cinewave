import { useFetch } from "../hooks/useFetch";
import { Card, Loader } from "../components"
// import { useEffect } from "react";
import { useTitle } from "../hooks/useTitle"

export const MovieList = ({apiPath, title}) => {
  const { data: movies, Loading } = useFetch(apiPath)
  // const pageTitle = useTitle(title);
  useTitle(title);

  //useEffect(() => {
  //  document.title = `${title} / CineWave`
  //})

  return (
    <main>
      { Loading && <Loader />}

      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly"> 
            { movies.map((movie) => {
              return  <Card key={movie.id} movie={movie} />
            }) }
        </div>
      </section>
    </main>
  )
}
