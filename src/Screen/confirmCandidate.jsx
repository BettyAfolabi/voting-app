import React from "react";
import Button from '../components/button';
import { useNavigate } from 'react-router-dom';
import '../App.css'

const ConfirmCandidate = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    
         navigate('/candidateConfirmed');
      };
    
      return(
        <div className=' w-full h-screen flex flex-col px-5 pt-12 box-border justify-center items-center font-sans app'>
            <form onSubmit={handleSubmit}>
                <h1 className='font-semibold text-2xl mb-5 text-start'>Confirm Candidate</h1>
                <div className=" w-full h-32 bg-stone-500 rounded-lg"></div>
                <p className='my-5 font-medium text-lg text-center'>candidate name</p>
                <div >
                    <p className='mb-1 font-base text-gray-700 text-xs text-center'>You have selected (selected-candidate-name) as your preferred candidate. </p>
                    <p className='mb-3 font-base text-gray-700 text-xs text-center'>Click the button to submit</p>
                </div>
                <Button type="button" label="Submit your vote" handleClick={() => {}} onClick={handleSubmit} />
            </form>
        </div>
      )
}

export default ConfirmCandidate;