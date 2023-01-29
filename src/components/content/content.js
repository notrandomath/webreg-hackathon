import "./content.scss";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Search from "@mui/icons-material/Search";

export default function Content() {
  return (
    <div className="content">
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
    </div>
  );
}
