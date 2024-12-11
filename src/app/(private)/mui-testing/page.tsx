// Import React library for creating components
import * as React from 'react';

// Import Material-UI components for creating a radio button group
import Radio from '@mui/material/Radio'; // Single radio button
import RadioGroup from '@mui/material/RadioGroup'; // Group of radio buttons
import FormControlLabel from '@mui/material/FormControlLabel'; // Label for individual radio buttons
import FormControl from '@mui/material/FormControl'; // Container for form elements
import FormLabel from '@mui/material/FormLabel'; // Label for the radio group

// Define the RadioButtonsGroup component
export default function RadioButtonsGroup() {
  return (
    // Form container for grouping related inputs
    <FormControl>
      {/* Label for the radio group */}
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      
      {/* Radio group for selecting one option */}
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label" // Links the label to the group for accessibility
        defaultValue="útočná helikoptéra" // Default selected value
        name="radio-buttons-group" // Name attribute for grouping radio buttons
      >
        {/* Individual radio button options */}
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="útočná helikoptéra" control={<Radio />} label="Other" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  );
}
