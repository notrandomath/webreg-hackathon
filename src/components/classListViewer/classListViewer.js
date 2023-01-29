import "./classListViewer.scss";
import { useState } from "react";
import {
  List,
  ListItem,
  IconButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Collapse,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

//https://mui.com/material-ui/react-list/
export default function ClassListViewer( { listOfClasses, checked, setChecked } ) {
  const [opened, setOpened] = useState([]);

  const handleClick = (value) => () => {
    const currentIndex = opened.indexOf(value);
    const newOpened = [...opened];

    if (currentIndex === -1) {
      newOpened.push(value);
    } else {
      newOpened.splice(currentIndex, 1);
    }

    setOpened(newOpened);
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div className="classListViewer">
        { listOfClasses.length > 0 &&
      <List className="classList" component="nav">
        {listOfClasses.map((value) => {
          const labelId = `checkbox-list-label-${value.id}`;
          return (
            <ListItem key={value.id} disablePadding className="classEntry">
              <ListItem role={undefined} className="nonNested" dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(value.id) !== -1}
                    onClick={handleToggle(value.id)}
                    tabIndex={-1}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={`${value.name} ${value.type}`} />
                <ListItemText id={labelId} primary={value.code} className="code"/>
                <IconButton onClick={handleClick(value.id)}>
                  {opened.indexOf(value.id) !== -1 ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )}
                </IconButton>
              </ListItem>
              <Collapse
                in={opened.indexOf(value.id) !== -1}
                timeout="auto"
                unmountOnExit
                className="nested"
              >
                <List component="div" disablePadding>
                  <ListItem>
                    <ListItemText primary={value.time} />
                    <ListItemText primary={value.location} className="right" />
                  </ListItem>
                </List>
              </Collapse>
            </ListItem>
          );
        })}
      </List>
    }
    </div>
  );
}
