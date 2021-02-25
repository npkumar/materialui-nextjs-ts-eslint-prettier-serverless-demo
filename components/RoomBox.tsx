import React from 'react';
import { Button, Chip, Drawer, Grid, Paper, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const RoomBox: React.FC = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <Box p={24}>
                    <Typography variant="h5">Lot of interesting stuff</Typography>
                </Box>
            </Drawer>
            <Paper elevation={3}>
                <Grid container>
                    <Grid item xs={3}>
                        <Box p={2}>
                            <Grid container direction="column" spacing={1}>
                                <Grid item>
                                    <Typography variant="h6">Side Section</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={9}>
                        <Box p={12}>
                            <Button onClick={() => setOpen(true)} variant="contained" color="secondary">
                                More Details
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
};

export default RoomBox;
