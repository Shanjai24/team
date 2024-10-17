import React from "react";
import { Box , Avatar , Typography , Card } from '@mui/material';

const backbone = {

    backgroundColor: '#EBEFF2', 
    height: '100vh', 
    width: '100vw',
    display: 'flex', 


};
function Dashboard1() {
    return (
        < Box sx={{ ...backbone }} >
            <Typography sx={{ color: '#101010' , marginLeft: '25px' , paddingTop: '60px'}}>
                Welcome,
                <br/>
                <span style={{ display: 'block', marginTop: '15px', fontWeight: 700 }}>Sarveshwara!</span>
            </Typography>
            <Avatar sx={{ marginLeft: '350px' , marginTop: '65px' }} src="/path/to/avatar.jpg" alt="Avatar" />


            <Box sx={{ p: 2 }}>
                <Card sx={{ display: 'flex', alignItems: 'center', padding: '16px', borderRadius: '12px', backgroundColor: '#fff' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                        <Typography variant="body2" color="textSecondary" sx={{ fontSize: '12px' }}>
                             Current workspace
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                        <Typography sx={{ fontSize: '1rem', fontWeight: 600 }}>
                            Workspace 1
                        </Typography>
                        </Box>
                    </Box>
                </Card>    
            </Box>
        </Box>
    );
}
export default Dashboard1;
