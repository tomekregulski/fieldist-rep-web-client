import * as React from 'react';
import SectionModal from '../SectionModal/SectionModal';

import Grid from '@mui/material/Grid';

const SectionCard = (props) => {
  return (
    <Grid>
      <Grid
        item
        xs={8}
        style={{
          height: '80px',
          border: 'solid 1px blue',
          borderRadius: '10px',
          textAlign: 'center',
          lineHeight: '80px',
          margin: '40px auto',
        }}
      >
        <SectionModal title={props.title} />
      </Grid>
    </Grid>
  );
};

export default SectionCard;
