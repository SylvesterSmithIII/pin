'use client'

import { useState } from "react"

export default function TodoForm() {
    const [showForm, setShowForm] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        date: "",
        priority: 4,
        group: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(formData)
    }

    return (
        <div className="mt-[20px] mb-[9px] ml-[45px]">
        <button onClick={() => setShowForm(!showForm)} className="text-gray-500 hover:text-DeepRed flex flex-row group text-sm">
            <div className="my-auto mr-2 group-hover:bg-DeepRed rounded-full p-1">
                <svg className="group-hover:hidden" wiwdth="14" height="14" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="17" y1="8.5" y2="8.5" stroke="#6E0D25"/>
                    <line x1="8.5" x2="8.5" y2="17" stroke="#6E0D25"/>
                </svg>
                <svg className="group-hover:block hidden" width="14" height="14" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="17" y1="8.5" y2="8.5" stroke="#FFFFFF"/>
                    <line x1="8.5" x2="8.5" y2="17" stroke="#FFFFFF"/>
                </svg>
            </div>
           
            
            Add Task

        </button>
        { showForm &&
        <div className="border-solid border-2 border-black rounded-[10px]">
            <form onSubmit={handleSubmit} action="">
                <input onChange={handleChange} className="block" name="name" type="text" placeholder="Task Name" />
                <input onChange={handleChange} className="block" name="description" type="text" placeholder="Description" />
                <input onChange={handleChange} name="date" type="date" />
                <select onChange={handleChange} name="priority" id="">
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                </select>
                <select onChange={handleChange} name="group" id="">
                    <option value="inbox">Inbox</option>
                </select>
                <input type="submit" value="Submit" />
            </form>
        </div>
        }
        </div>
        
    )
}