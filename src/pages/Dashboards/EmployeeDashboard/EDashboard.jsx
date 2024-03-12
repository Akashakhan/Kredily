import { Button, Dialog, DialogContent, DialogTitle } from '@mui/material'
import React, { useState } from 'react'
import LeaveTable from '../../../component/LeaveTable'
import { useAuth } from '../../../context/Context'

const EDashboard = () => {
    const [open, setOpen] = useState( false )
    const [leaveType, setLeaveType] = useState( '' );
    const [startDate, setStartDate] = useState( '' );
    const [endDate, setEndDate] = useState( '' );
    const [reason, setReason] = useState( '' );
    const { leaveData, setLeaveData, handleLogout } = useAuth()

    const handleSubmit = ( e ) => {
        e.preventDefault();
        var dataSet = { leaveType, startDate, endDate, reason, status: 'Pending' }
        setLeaveData( [...leaveData, dataSet] )
        localStorage.setItem( 'leave', JSON.stringify( [...leaveData, dataSet] ) )
        handleClose()
    };

    const handleClose = () => {
        setOpen( false )
        setLeaveType( '' )
        setStartDate( '' )
        setEndDate( '' )
        setReason( '' )
    }

    return (
        <React.Fragment>
            <Dialog fullWidth={ 'md' } onClose={ handleClose } open={ open }>
                <DialogTitle>APPLE LEAVE</DialogTitle>
                <DialogContent>
                    <form onSubmit={ handleSubmit } className="mt-8 space-y-6">
                        <div>
                            <label htmlFor="leaveType" className="block text-sm font-medium text-gray-700">
                                Leave Type
                            </label>
                            <select
                                id="leaveType"
                                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                value={ leaveType }
                                onChange={ ( e ) => setLeaveType( e.target.value ) }
                                required>
                                <option value=''>Select Leave Type</option>
                                <option value='Casual'>Casual</option>
                                <option value='Sick Leave'>Sick Leave</option>
                                <option value='Privilege'>Privilege</option>
                            </select>
                        </div>
                        <div className='grid grid-cols-2 gap-3'>
                            <div>
                                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                                    Start Date
                                </label>
                                <input
                                    id="startDate"
                                    type="date"
                                    required
                                    className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    value={ startDate }
                                    onChange={ ( e ) => setStartDate( e.target.value ) }
                                />
                            </div>
                            <div>
                                <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                                    End Date
                                </label>
                                <input
                                    id="endDate"
                                    type="date"
                                    required
                                    className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    value={ endDate }
                                    onChange={ ( e ) => setEndDate( e.target.value ) }
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
                                Reason
                            </label>
                            <textarea
                                id="reason"
                                required
                                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                value={ reason }
                                onChange={ ( e ) => setReason( e.target.value ) }
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
            <div className='max-w-[1220px] mx-auto px-5'>
                <div className='flex justify-between items-center py-3'>
                    <h1 className='text-[2rem] xs:text-[1rem] font-semibold'>
                        Employee Leave Portal
                    </h1>
                    <Button type='button' variant='contained' onClick={ () => setOpen( true ) }>
                        <p className='xs:text-[10px]'>
                            Apply Leave
                        </p>
                    </Button>
                </div>
                <LeaveTable data={ leaveData } />
                <div className='text-end mt-8'>
                    <Button type='button' variant='outlined' onClick={ () => handleLogout() }>
                        Logout
                    </Button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default EDashboard