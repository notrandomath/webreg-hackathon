import "./petrPouch.scss";
import { sampleData } from "../../data";
import ClassListViewer from "../../components/classListViewer/classListViewer";
import {
  TextField,
  InputAdornment,
  Button,
  IconButton,
  Grid,
  Box,
} from "@mui/material";
import Search from "@mui/icons-material/Search";
import { useState, useRef } from "react";

export default function PetrPouch() {
  const [listOfClasses, setListOfClasses] = useState([]);
  const search = useRef(undefined);

  const handleSubmit = () => (e) => {
    e.preventDefault();
    const result = sampleData.filter((some_class) => {
        return some_class.name.includes(search.current.value) || some_class.code === search.current.value;
    })
    setListOfClasses(result)
  };

  return (
    <div className="petrPouch">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <form className="searchBar" onSubmit={handleSubmit()}>
              <TextField
                label="Search"
                inputRef={search}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton>
                        <Search />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </form>
          </Grid>
          <Grid item xs={6}>
            <h2>Total Units: 12.0</h2>
          </Grid>
          <Grid item xs={2}>
            <img src="assets/anteater.jpg" alt="" />
          </Grid>
          <Grid item xs={4}>
            {<ClassListViewer listOfClasses={listOfClasses} />}
          </Grid>
          <Grid item xs={8}>
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
  );
}
