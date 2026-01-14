import { useSearchParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { useTitle } from "../hooks/useTitle"
import { Card } from "../components"


export const Search = ({apiPath}) => {
  const[searchParams] = useSearchParams()
  const queryTerm = searchParams.get("q")

  const { data: movies, loading } = useFetch(apiPath, queryTerm)
  useTitle(`Search result for ${queryTerm}`)

  if(!queryTerm) {
    return (
      <main className="py-10 text-center">
        <p className="text-2xl text-gray-600 dark:text-gray-300">
          Please enter a movie name to search !
        </p>
      </main>
    )
  }

  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">
          {loading && (
            <p className="text-xl text-gray-600 dark:text-gray-300"> Searching... </p>
          )}
          
          {
            !loading && movies.length === 0 ? `No result found for '${queryTerm}'` : `Result for '${queryTerm}' `
          }
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap"> 
            { movies.map((movie) => {
              return  <Card key={movie.i} movie={movie} />
            })}
        </div>
      </section>
    </main>
  )
}
