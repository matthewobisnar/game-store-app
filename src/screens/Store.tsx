import ErrorBoundaryFallback from "@/components/ds/ErrorBoundaryFallback";
import GameGenres from "@/components/ds/GameGenres";
import GameGrid from "@/components/ds/GameGrid";
import Navigation from "@/components/ds/Navigation";
import { Grid, GridItem } from "@chakra-ui/react";
import { ErrorBoundary } from "react-error-boundary";

const Store = () => {
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
            <GameGenres/>
        </ErrorBoundary>
      </GridItem>

      <GridItem 
        area={`main`}
      >
          <ErrorBoundary
              FallbackComponent={ErrorBoundaryFallback}
          >
            <GameGrid/>
          </ErrorBoundary>
      </GridItem>

    </Grid>
  )
}

export default Store;