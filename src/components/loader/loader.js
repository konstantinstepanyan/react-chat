import React from 'react';
import {Container, Grid} from "@material-ui/core";
import './css/loader.css';

const Loader = () => {
    return(
        <Container>
       
        
        
        <Grid container
               style={{height: window.innerHeight - 50}}
               alignItems={'center'}
               justify={'center'}
        >
            
            <Grid 
                  style={{height: 200, width: 400, background: 'lightgray'}}
                  alignItems={"center"}
                  justify={"center"}
            >
                <div className="lds-dual-ring"></div>
        
            </Grid>
            
        
        </Grid>
       </Container>
    )
}

export default Loader;