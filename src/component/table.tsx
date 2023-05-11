"use client"

import React, { useState } from "react";
import Modal from "./modal";
import { Task } from "@/dto/common";

const Table = () => {
    const [tasks, setTasks] = useState<Task[]>([])
    const [isShowModal, setModal] = useState<boolean>(false)

    const onAddTask = (task: Task) => {
        const newTasks = [...tasks];
        newTasks.push(task);
        setTasks(newTasks);
        setModal(false);
    }

    const onDelete = (id: string) => {
        const newTasks = tasks.filter(t => t.Id != id);
        setTasks(newTasks);
    }

    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="flex justify-between py-3 pl-2">
                    {/* <div className="relative max-w-xs">
                        <label htmlFor="hs-table-search" className="sr-only">
                            Search
                        </label>
                        <input
                            type="text"
                            name="hs-table-search"
                            id="hs-table-search"
                            className="block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                            placeholder="Search..."
                        />
                        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                            <svg
                                className="h-3.5 w-3.5 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </div>
                    </div> */}

                    <div className="flex items-center space-x-2">
                        <div className="relative">
                            <button
                                onClick={() => setModal(true)}
                                className="relative z-0 inline-flex text-sm rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1">
                                <span className="relative inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md sm:py-2">
                                    Add
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    {isShowModal &&
                        <Modal
                            onHandleClose={() => setModal(false)}
                            onHandleSave={(d: Task) => onAddTask(d)}
                        />}
                </div>

                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-hidden border rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Title
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Date
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Time
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        Location
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {tasks.map((t, i) => {
                                    return (
                                        <tr key={"task_" + i}>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                                {t.Title}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                {t.Date}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                {t.Time}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                {t.Location}
                                            </td>
                                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                                <button
                                                    className="text-red-500 hover:text-red-700"
                                                    onClick={() => onDelete(t.Id)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Table;