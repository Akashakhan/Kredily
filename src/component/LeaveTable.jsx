import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAuth } from '../context/Context';

const LeaveTable = ( { data } ) => {
    const { leaveData, setLeaveData, role } = useAuth()

    const handleChange = ( e, inds ) => {
        var dataSet = leaveData.map( ( item, index ) => ( index === inds ? { ...item, 'status': e } : { ...item } ) )
        setLeaveData( dataSet )
        localStorage.setItem( 'leave', JSON.stringify( dataSet ) )
    }

    return (
        <TableContainer component={ Paper }>
            <Table aria-label="leave table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={ { fontWeight: 600 } }>Leave Type</TableCell>
                        <TableCell sx={ { fontWeight: 600 } } align="right">Start Date</TableCell>
                        <TableCell sx={ { fontWeight: 600 } } align="right">End Date</TableCell>
                        <TableCell sx={ { fontWeight: 600 } } align="right">Reason</TableCell>
                        <TableCell sx={ { fontWeight: 600 } } align="right">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { data.length > 0 ? data?.map( ( row, index ) => (
                        <TableRow key={ index }>
                            <TableCell component="th" scope="row">{ row.leaveType }</TableCell>
                            <TableCell align="right">{ row.startDate }</TableCell>
                            <TableCell align="right">{ row.endDate }</TableCell>
                            <TableCell align="right">{ row.reason }</TableCell>
                            { role === 'employee' ?
                                <TableCell sx={ { fontWeight: 600, color: `${row.status === 'Pending' ? 'orange' : row.status === 'Cancelled' ? 'red' : 'green'}` } } align="right">{ row.status }</TableCell>
                                : <TableCell align="right">
                                    <select onChange={ ( e ) => { handleChange( e.target.value, index ) } } value={ row.status }>
                                        <option value='Pending'>Pending</option>
                                        <option value='Approved'>Approve</option>
                                        <option value='Cancelled'>Cancel</option>
                                    </select>
                                </TableCell>
                            }
                        </TableRow>
                    ) ) :
                        <div style={ { fontWeight: 600, padding: 10 } }>
                            No Leaves Applied
                        </div>
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default LeaveTable;