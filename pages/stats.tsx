import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '../src/Link';

export default function Stats() {
    return (
        <Box>
            <Typography variant="h4" component="h1" gutterBottom>
                Stats Page
            </Typography>
            <Link href="/">Go to the home page</Link>
        </Box>
    );
}
