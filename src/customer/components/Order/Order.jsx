
import { Grid } from '@mui/material'
import React from 'react'
import OrderCard from './OrderCard'

const orderStatus = [
    { lable: "On The Way", value: "on_the_way" },
    { lable: "Delivered", value: "delivered" },
    { lable: "Cancelled", value: "cancelled" },
    { lable: "Returned", value: "returned" },

]
const Order = () => {
    return (
        <div className='px:5 lg:px-20 p-5  bg-gray-900 shadow-md shadow-white hover:shadow-2xl text-white '>
            <Grid container sx={{ justifyContent: "space-between" }}>

                <Grid item xs={2.5}>
                    <div className='h-auto shadow-lg bg-gray-900 text-white p-5 sticky top-5'>
                        <h1 className='font-bold text-lg'>Filter</h1>
                        <div className='space-y-4 mt-10'>
                            <h1 className='font-semibold'>OREDER STATUS</h1>
                            {orderStatus.map((option) => <div className="flex items-center">
                                <input defaultValue={option.value} type='checkbox' className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500' />

                                <lable className='ml-3 text-sm text-white opacity-60' htmlFor={option.value}>
                                    {option.lable}
                                </lable>
                            </div>)}
                        </div>
                    </div>
                </Grid>

                <Grid className='space-y-5' item xs={9}>
          { [1,1,1,1,1,1,1].map((item)=> <OrderCard /> )}
                    
                </Grid>
            </Grid>
        </div>
    )
}

export default Order