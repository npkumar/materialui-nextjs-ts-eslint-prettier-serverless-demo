import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button, Checkbox, FormControlLabel, Grid, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    email: yup.string().email('Enter a valid email').required('Email is required'),
    password: yup.string().min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
});

export default function Form() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            date: '',
            checked: true,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <Box>
            <Typography variant="h4" component="h1" gutterBottom>
                Report
            </Typography>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                        <Grid container justify="flex-end">
                            Email *
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <TextField
                            variant="outlined"
                            size="small"
                            fullWidth
                            id="email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Grid container justify="flex-end">
                            Password *
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <TextField
                            variant="outlined"
                            size="small"
                            fullWidth
                            id="password"
                            name="password"
                            type="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <Grid container justify="flex-end">
                            Date
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <TextField
                            fullWidth
                            id="date"
                            type="date"
                            variant="outlined"
                            size="small"
                            value={formik.values.date}
                            onChange={formik.handleChange}
                        />
                    </Grid>

                    <Grid item xs={12} sm={3} />
                    <Grid item xs={12} sm={9}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formik.values.checked}
                                    onChange={formik.handleChange}
                                    id="checked"
                                    name="checked"
                                    color="primary"
                                    value={formik.values.checked}
                                />
                            }
                            label="I want newsletters"
                        />
                    </Grid>

                    <Grid item xs={12} sm={3} />
                    <Grid item xs={12} sm={9}>
                        <Button size="small" fullWidth color="primary" variant="contained" type="submit">
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
}
