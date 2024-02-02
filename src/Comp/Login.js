import React from 'react';
import { Container, Card, CardContent, Typography, Grid, TextField, Button, Checkbox, FormControlLabel } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';


const RegistrationForm = () => {
  return (<>
    <Container component="main" maxWidth="xs"  >
      <Card sx={{ mt: 8, mx: 'auto', p: 4, borderRadius: 2, boxShadow: 5 }}>
        <CardContent>
          <Typography component="h1" variant="h5" align="center">
            Sign up now
          </Typography>

          <form noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="password"
                  id="password"
                  label="Password"
                  name="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="subscribe" color="primary" />}
                  label="Subscribe to our newsletter"
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
          </form>

          <Grid container justifyContent="center">
            <Grid item>
              <Typography variant="body2" color="textSecondary">
                or sign up with:
              </Typography>
            </Grid>
          </Grid>

          <Grid container justifyContent="center" spacing={2}>
            <Grid item>
              <Button variant="outlined" color="primary" startIcon={<i className="fab fa-facebook-f"></i>}>
                Facebook
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="info" startIcon={<i className="fab fa-twitter"></i>}>
                Twitter
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="success" startIcon={<i className="fab fa-google"></i>}>
                Google
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="secondary" startIcon={<i className="fab fa-github"></i>}>
                GitHub
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>

    </>
    
  );
};

export default RegistrationForm;
