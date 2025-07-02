import useGameTrailer from "@/hooks/useGameTrailer"

const GameTrailer = ({gameId}: {gameId: string}) => {

  const {data: gameTrailer, isLoading, error} = useGameTrailer(gameId)

  if (isLoading) return null;

  if (error) return null;

  if (gameTrailer && gameTrailer?.length == 0) return null;

  console.log(gameTrailer![0].data[480]);

  return (
    <video 
      controls 
      src={gameTrailer![0].data[480]} 
      poster={gameTrailer![0].preview}>
      </video>
  )

}

export default GameTrailer