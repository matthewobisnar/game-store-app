import ErrorBoundaryFallback from "@/components/ds/ErrorBoundaryFallback";
import GameGenres from "@/components/ds/GameGenres";
import GameGrid from "@/components/ds/GameGrid";
import Navigation from "@/components/ds/Navigation";
import type { GenreModel } from "@/hooks/useGenres";
import { Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

const Store = () => {

  const [selectedGenre, setSelectedGenre] = useState<GenreModel | null>(null);

  const handleSelectedGenre = (genre: GenreModel) => {
    setSelectedGenre(genre)
  }

 return (
    <Grid
      templateAreas={{
        base: `"nav" 
               "main"`,
        lg:   `"nav      nav"
               "sidebar  main"`
      }}
      templateColumns={{
        base: '1fr',
        lg: '250px 1fr'
      }}         
    >
      <GridItem 
        area={`nav`} 
      >
        <Navigation/>
      </GridItem>

      <GridItem 
          area={`sidebar`}
          paddingX={5}
          display={{
            base: "none", 
            lg: "block"
          }}
      >
          <ErrorBoundary
            FallbackComponent={ErrorBoundaryFallback}
          >
            <GameGenres selectedGenre={selectedGenre} onSelectGenre={handleSelectedGenre}/>
        </ErrorBoundary>
      </GridItem>

      <GridItem 
        area={`main`}
      >
          <ErrorBoundary
              FallbackComponent={ErrorBoundaryFallback}
          >
            <GameGrid selectedGenre={selectedGenre}/>
          </ErrorBoundary>
      </GridItem>

    </Grid>
  )
}

export default Store;