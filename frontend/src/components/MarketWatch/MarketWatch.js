import React from 'react';
import Classes from './MarketWatch.css';
import BasicTabs from '../../UI/Tabs/Tabs';

const marketWatch = props => {
    return (
            <div id='MarketWatch' className={Classes.body}> 
            <h3>Market Watch</h3>
            <BasicTabs/>
            </div>

    );
}

export default marketWatch;