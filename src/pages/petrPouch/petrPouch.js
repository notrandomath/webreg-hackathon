import "./petrPouch.scss";
import { sampleData } from "../../data";
import ClassListViewer from "../../components/classListViewer/classListViewer";
import CalendarViewer from "../../components/calendarViewer/calendarViewer";
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

function renderAnteater(param) {
  switch(param) {
    case 0:
      return <img src ="assets/anteater.jpeg" alt=""></img>;
    case 1:
      return <img src ="assets/anteater2.jpg" alt=""></img>;
    case 2:
      return<img src ="assets/anteater3.jpg" alt=""></img>;
    case 3:
      return <img src ="assets/anteater4.jpg" alt=""></img>;
    default:
      return <img src ="assets/anteater5.jpg" alt=""></img>;
  }
}

export default function PetrPouch() {
  const [listOfClasses, setListOfClasses] = useState([]);
  const [checked, setChecked] = useState([]);
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
            <h2>Total Units: {checked.map(i => listOfClasses[i]).length*4}.0</h2>
          </Grid>
          <Grid item xs={2} className="imgGrid">
            {renderAnteater(checked.length)}
          </Grid>
          <Grid item xs={4}>
            <ClassListViewer listOfClasses={[...new Set([...listOfClasses, ...checked.map(i => sampleData[i])])]} checked={checked} setChecked={setChecked}/>
          </Grid>
          <Grid item xs={8}>
            <CalendarViewer listOfClasses={checked.map(i => sampleData[i])}/>
          </Grid>
          <Grid item xs={4}>
            <Button variant="outlined">View Study List</Button>
          </Grid>
          <Grid item xs={8}>
            <Button variant="contained">Save Classes</Button>
            <Button variant="contained">Drop Classes</Button>
            <Button variant="contained">Waitlist Classes</Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
