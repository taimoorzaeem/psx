import React, { Component } from 'react';

import DataSlider from '../../components/DataSlider/DataSlider';
import DataSummary from '../../components/DataSummary/DataSummary';
import Indices from '../../components/Indices/Indices';
import Performers from '../../components/Performers/Performers';
import MarketWatch from '../../components/MarketWatch/MarketWatch';
import Aux from '../../hoc/Auxiliary/Auxiliary';



class DataPortal extends Component {
    render() {
        return (
            <Aux>
                <DataSlider />
                <DataSummary />
                <Indices />
                <Performers />
                <MarketWatch />
            </Aux>
        );
    }

}

export default DataPortal;