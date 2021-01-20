import React from 'react';
import { withRouter } from 'react-router-dom';

import Piechart from '../Charts/Piechart'
import Columnchart from '../Charts/Columnchart'

function Home(props) {

    let chart = null;
    if(props.type === "Column")
    {
      chart = <Columnchart />
    }
    else if(props.type === "Pie")
    {
      chart = <Piechart />
    }
    return(
        <div className="mt-2">
            {chart}
        </div>
    )
}

export default withRouter(Home);