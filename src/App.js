import "./App.css";
import Header from "./Component/Header";
import { Box, Grid } from "@material-ui/core";
import ProfileStatus from "./Component/ProfileStatus";
import ProfileDetails from "./Component/ProfileDetails";
import GeneralInfo from "./Component/GeneralInfo";
function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <item>
              <Header />
            </item>
          </Grid>
          <Grid item xs={2}>
            <item>
              <ProfileStatus />
            </item>
          </Grid>
          <Grid item xs={10}>
            <Grid display="flex" container>
              <Grid item xs={12}>
                <item>
                  <ProfileDetails />
                </item>
              </Grid>
              <Grid item xs={12}>
                <item>
                  <GeneralInfo />
                </item>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
