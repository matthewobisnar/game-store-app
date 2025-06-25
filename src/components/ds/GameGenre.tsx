import useGenres, { type GenreModel } from "@/hooks/useGenres";

const GameGenre = () => {

  const { data: genres, loading } = useGenres();

  return (
    <ul>
        {!loading && genres?.map((genre: GenreModel) => (
            <li key={genre.id}>{genre.name}</li>
        ))}
    </ul>
  )
}

export default GameGenre;