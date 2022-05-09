import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const NotFound = () => {
    const toasty =()=>{
        toast.error(`Oops! you're lost`)
    }
    toasty()
    
    return (
        <div>
            
            <img className='w-100' src="https://shots.codepen.io/djtms/pen/Exbdgob-1280.jpg?version=1646005869" alt="" />
            <ToastContainer limit={1}/>
        </div>
    );
};

export default NotFound;