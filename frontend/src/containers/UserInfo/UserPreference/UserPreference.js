import React, { Component } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import jwtDecode from 'jwt-decode';


const datagridSx = {
    "& .MuiDataGrid-virtualScrollerRenderZone": {
        "& .MuiDataGrid-row": {
            "&:nth-child(n)": { backgroundColor: "rgba(255, 255, 255, .7)", width: '80em', color: "black" },
            "&:nth-child(1)": { "border-top": "2px solid grey" }
        }
    },
    "& .MuiDataGrid-columnHeaders": {
        backgroundColor: "rgba(234,247,240,255)",
        color: "rgba(51,51,51,255)",
        fontSize: 13,
        fontWeight: "bolder",
    }
};
  


const columns = [
    {
        field: 'name',
        headerName: 'NAMES',
        width: 170,
        editable: true,
    },
    {
        field: 'ldcp',
        headerName: 'IDCPS',
        width: 110,
        editable: true,
        align: "right",
        headerAlign: "right",
    },
    {
        field: 'open',
        headerName: 'OPENS',
        type: 'string',
        width: 110,
        editable: true,
    },
    {
        field: 'high',
        headerName: 'HIGHS',
        sortable: true,
        width: 110,
        align: 'right',
        headerAlign: "right",
    },
    {
        field: 'low',
        headerName: 'LOWS',
        width: 110,
        editable: true,
    },
    {
        field: 'current',
        headerName: 'CURRENTS',
        width: 110,
        editable: true,
    },
    {
        field: 'change',
        headerName: 'CHANGES',
        width: 140,
        editable: true,
    },
    {
        field: 'volume',
        headerName: 'VOLUMES',
        // type: 'number',
        width: 140,
        editable: true,
    },
];

// const rows = [{"scrip": '1', "ldcp": '2', "open": '3', "high": '4', "low": '5', "current": '6', "change": '7', "volume": '8'}]


class UserPreference extends Component {

    state = {
        rows: [],
        userPref: [], 
        new_data: []
    }

    componentDidMount() {
        const mData = {};
        const jwt = localStorage.getItem('token');
        const user = jwtDecode(jwt);
        axios.get('http://localhost:5000/api/users/preferences/' + user._id)
            .then(res => {
                this.setState({userPref: res.data});
            })
            .catch(err => {
                console.log("The data is not avaliable!");
            })
        axios.get('http://localhost:5000/api/marketData')
                .then((res) => {
                    const fetchData = res.data['marketData'].map((obj) => {
                        const subset = (({ name, ldcp, open, high, low, current, change, volume }) => ({ name, ldcp, open, high, low, current, change, volume }))(obj);
                        return subset;
                    })
                    this.setState({rows: fetchData});
                    let num = -1;
                    const test = this.state.rows.filter((obj) => {
                        num+=1;
                        return (obj.name === (this.state.userPref.preferences)[num]);
                    })
                })
                .catch((err) => console.log(err));

        

            
            // this.state.userPref.map((el) => {
            //     console.log(el);
            //     const new_data = this.state.rows.filter((obj) => {
            //         console.log(obj);
            //         //return (el === obj["name"])
            //     })
            //     this.setState({new_data: new_data})

            // })
    };

    render() {
        return (
            <div style={{ height: 300, width: '100%' , color: 'black'}}>
                <DataGrid
                    sx={datagridSx}
                    rows={this.state.rows}
                    getRowId={(row) => row['name']}
                    columns={columns}
                    headerHeight={40}
                    rowHeight={40}
                    pageSize={5}
                    rowsPerPageOptions={[5, 10, 20]}
                    checkboxSelection
                    disableSelectionOnClick
                // sx={{bgcolor: 'green'}}
                />
            </div>
        )
    }
}

export default UserPreference;
