import _ from 'lodash';
import React from 'react';
// Re-factored here, from where it was: weather_list.js
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

/* STATELESS FUNCTIONAL COMPONENT */
// Just renders the state it receives
// Note that that state comes in as props

function average(data) {
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  return (
    <div>
{/*
// Re-factored here, from where it was: weather_list.js
// Also: 1) changed 'temps' to a passed-in prop: props.data; 2) changed hard-coded "red" to props.color.
      // <Sparklines height={120} width={180} data={temps}>
        // <SparklinesLine color="red" />
*/}
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        {average(props.data)} {props.units}
      </div>
    </div>
  );
}
