"use client"

import { useState } from "react";
import Input from "./input";
import { Task } from "@/dto/common";

//@ts-ignore
const Modal = ({ onHandleSave, onHandleClose }) => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [location, setLocation] = useState("");

    const onSaveInformation = () => {
        const task: Task = {
            Title: title,
            Date: date,
            Time: time,
            Location: location,
            Id: new Date().toISOString + Math.random().toString()
        }
        onHandleSave(task);
    }
    return (
        <div className='w-screen h-screen bg-black bg-opacity-30 fixed top-0 right-0 flex justify-center items-center'>
            <div className='bg-white p-10 rounded-md shadow-md'>
                <div>
                    <h5>Add Task</h5>
                    <div
                        className={`border transition duration-150 ease-in-out focus-within:border-primary border-gray-gray4`}
                    >
                        <Input id="Title" label="Title" type="text" onChange={(e: any) => setTitle(e.target.value)} />
                        <Input id="Date" label="Date" type="Date" onChange={(e: any) => setDate(e.target.value)} />
                        <Input id="Time" label="Time" type="Time" onChange={(e: any) => setTime(e.target.value)} />
                        <Input id="Location" label="Location" type="text" onChange={(e: any) => setLocation(e.target.value)} />
                    </div>
                </div>

                <div className='flex justify-between mt-5'>
                    <button className='outline outline-1 outline-[#101f20] bg-[#101f20] text-white py-2 px-4 hover:bg-transparent hover:text-black'
                    >Cancel</button>
                    <button className='outline outline-1 outline-[#101f20] hover:bg-[#101f20] hover:text-white py-2 px-4 bg-transparent text-black'
                        onClick={onSaveInformation}
                    >Save</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;