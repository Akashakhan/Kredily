import React from 'react'
import LeaveTable from '../../../component/LeaveTable'
import { Button } from '@mui/material'
import { useAuth } from '../../../context/Context'

const ManagerDashboard = () => {
    const { leaveData, handleLogout } = useAuth()
    return (
        <div className='max-w-[1220px] mx-auto px-5'>
            <div className='flex justify-between items-center py-3'>
                <h1 className='text-[2rem] font-semibold'>
                    Leave Management Portal
                </h1>
            </div>
            <LeaveTable data={ leaveData } />
            <div className='text-end mt-8'>
                <Button type='button' variant='outlined' onClick={ () => handleLogout() }>
                    Logout
                </Button>
            </div>
        </div>
    )
}

export default ManagerDashboard