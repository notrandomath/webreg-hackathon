import "./petrPouch.scss"
import { TextField, InputAdornment, Button, IconButton, Grid, Box, Item } from "@mui/material"
import Search from "@mui/icons-material/Search"


export default function PetrPouch() {
  return (
    <div className="petrPouch">
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <div className="searchBar">
                        <TextField
                        label="Search"
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <IconButton>
                                <Search/>
                                </IconButton>
                            </InputAdornment>
                            ),
                        }}
                        />
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <h2>Total Units: 12.0</h2>
                </Grid>
                <Grid item xs={2}>
                    <img src="assets/anteater.jpg" alt=""/>
                </Grid>
                <Grid item xs={4}>
                    xs=4
                </Grid>
                <Grid item xs={8}>
                    xs=8
                </Grid>
                <Grid item xs={4}>
                    <Button variant="outlined">View Study List</Button>
                </Grid>
                <Grid item xs={8}>
                    <Button variant="contained">Add Class</Button>
                    <Button variant="contained">Drop Class</Button>
                    <Button variant="contained">Waitlist Class</Button>
                </Grid>
            </Grid>
        </Box>
      
    </div>
  )
}
