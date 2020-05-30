import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@material-ui/core';
import Trip from './trip';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}

const TripDetails = () => {

  const [currentTab, setCurrentTab] = useState(0);

  const handleChange = (e, newTab) => {
    setCurrentTab(newTab);
  };


  return (
    <div>
      <Tabs
        value={currentTab}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Trip" />
        <Tab label="Stops" />
        <Tab label="Gallery" />
      </Tabs>

      <TabPanel value={currentTab} index={0}>
        <Trip />
      </TabPanel>
      <TabPanel value={currentTab} index={1}>
        <div>Stops</div>
      </TabPanel>
      <TabPanel value={currentTab} index={2}>
        <div>Gallery</div>
      </TabPanel>
    </div>
  );
}

export default TripDetails;