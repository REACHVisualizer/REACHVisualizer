import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState('EU');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="blue"
      value={alignment}
      exclusive
      onChange={handleChange}
      size="small"
      sx={{ pt: 3, pb: 0 }}
    >
      <ToggleButton value="EU">EU</ToggleButton>
      <ToggleButton value="UK">UK</ToggleButton>
      <ToggleButton value="TK">TK</ToggleButton>
    </ToggleButtonGroup>
  );
}
