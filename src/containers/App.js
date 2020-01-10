import React from 'react';
import OfertasDataTable from '../components/OfertasDataTable';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar'
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));


function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <OfertasDataTable />
    </div>
  );
}

export default App;
