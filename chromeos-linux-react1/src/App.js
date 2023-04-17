import './App.css';
import Launches from './modules/Launches';
import Missions from './modules/Missions';
import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function App() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <div>
      <h2>My first Apollo app 🚀</h2>


    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Launches" />
        <Tab label="Missions" />
        <Tab label="Rockets" />
      </Tabs>  
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Launches />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Missions />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Coming soon
        </TabPanel>
    </Box>
    </div>
  );
}