import ErrorBoundaryFallback from "@/components/ds/ErrorBoundaryFallback";
import GameFilters from "@/components/ds/GameFilters";
import GameGenres from "@/components/ds/GameGenres";
import GameGridInfinite from "@/components/ds/GameGridInfinite";
// import GameGrid from "@/components/ds/GameGrid";
import GameHeading from "@/components/ds/GameHeading";
import Navigation from "@/components/ds/Navigation";
import { Grid, GridItem } from "@chakra-ui/react";
import { ErrorBoundary } from "react-error-boundary";

const Store = () => {

 return (
    <Grid templateAreas={{
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

      <GridItem area={`nav`}>
        <Navigation/>
      </GridItem>

      <GridItem area={`sidebar`} paddingX={5} display={{
          base: "none", 
          lg: "block"
        }}
      >
        <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
          <GameGenres/>
        </ErrorBoundary>
      </GridItem>

      <GridItem area={`main`} padding={`10px`} gap={`15px`} display={`grid`}>
        <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
          <GameHeading/>
          <GameFilters/>
        </ErrorBoundary>
        <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
          {/* <GameGrid/> */}
          <GameGridInfinite/>
        </ErrorBoundary>
      </GridItem>
    </Grid>
  )
}

export default Store;