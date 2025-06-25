import ErrorBoundaryFallback from "@/components/ds/ErrorBoundaryFallback";
import GameGenre from "@/components/ds/GameGenre";
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
    >
      <GridItem 
        area={`nav`} 
      >
        <Navigation/>
      </GridItem>

      <GridItem 
          area={`sidebar`}
          display={{
            base: "none", 
            lg: "block"
          }}
      
      >
          <ErrorBoundary
            FallbackComponent={ErrorBoundaryFallback}
          >
            <GameGenre/>
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