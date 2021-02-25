import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import RoomBox from '../components/RoomBox';

export default function Index() {
    return (
        <Box>
            <Typography variant="h4" component="h1" gutterBottom>
                Dashboard
            </Typography>
            <RoomBox />
        </Box>
    );
}
