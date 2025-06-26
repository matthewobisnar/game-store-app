import ErrorBoundaryFallback from "@/components/ds/ErrorBoundaryFallback";
import GameFilters from "@/components/ds/GameFilters";
import GameGenres from "@/components/ds/GameGenres";
import GameGrid from "@/components/ds/GameGrid";
import Navigation from "@/components/ds/Navigation";
import StoreContextProvider from "@/contexts/StoreContextProvider";
import { Grid, GridItem } from "@chakra-ui/react";
import { ErrorBoundary } from "react-error-boundary";

const Store = () => {

 return (

  <StoreContextProvider>
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
          <GameFilters/>
        </ErrorBoundary>
        <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
          <GameGrid/>
        </ErrorBoundary>
      </GridItem>

    </Grid>
  </StoreContextProvider>
  )
}

export default Store;