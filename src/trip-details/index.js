import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@material-ui/core';
import Trip from './trip';
import Gallery from './gallery';
import Stops from './stops';
import BackButton from '../common/back-button';

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

const TripDetails = (props) => {
  const trip = props.location.state.trip;

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
        <Trip trip={trip} />
      </TabPanel>
      <TabPanel value={currentTab} index={1}>
        <Stops stops={trip.stops} />
      </TabPanel>
      <TabPanel value={currentTab} index={2}>
        <Gallery images={trip.images} />
      </TabPanel>
      <BackButton />
    </div>
  );
}

export default TripDetails;