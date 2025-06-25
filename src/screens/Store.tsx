import Navigation from "@/components/ds/Navigation";
import { Grid, GridItem } from "@chakra-ui/react";

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
        paddingY={`10px`}
      >
        <Navigation/>
      </GridItem>

      <GridItem 
          bg="yellow" 
          area={`sidebar`}
          display={{
            base: "none", 
            lg: "block"
          }}
          flexBasis={`40px`}
      >
        sidebar
      </GridItem>

      <GridItem 
        bg="red" 
        area={`main`}>
          main
      </GridItem>

    </Grid>
  )
}

export default Store;