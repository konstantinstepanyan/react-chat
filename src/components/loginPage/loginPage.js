import React from 'react';
import {Button, Container, Grid} from "@material-ui/core";
import Box from "@material-ui/core/Box";

const LoginPage = () => {
    return(
        
       <Container>
       
        
        
        <Grid container
               style={{height: window.innerHeight - 50}}
               alignItems={'center'}
               justify={'center'}
        >
            
            <Grid container
                  style={{height: 200, width: 400, background: 'lightgray'}}
                  alignItems={"center"}
                  justify={"center"}
            >
                <Box>
                    <Button variant={'outlined'}>
                        Войти с помощью Google
                    </Button>
                </Box>
        
            </Grid>
        
        
        </Grid>
       </Container>
    )
}

export default LoginPage;