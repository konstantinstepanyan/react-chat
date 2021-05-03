import React, {useContext} from 'react';
import {Button, Container, Grid} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {Context} from '../../index';
import firebase from "firebase";

const LoginPage = () => {
    
    const {auth} = useContext(Context);
    
    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const {user} = await auth.signInWithPopup(provider);
        console.log(user);
    }
    
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
                    <Button onClick={login} variant={'outlined'}>
                        Войти с помощью Google
                    </Button>
                </Box>
        
            </Grid>
        
        
        </Grid>
       </Container>
    )
}

export default LoginPage;