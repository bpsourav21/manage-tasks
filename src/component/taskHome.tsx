"use client"

import React, { useEffect, useState } from "react";
import Modal from "./modal";
import { Task, UserInfoMapDto } from "@/dto/common";
import Table from "./table";
import { getStoageData, setStoageData } from "@/app/helpers/storage";
import { userDataKey } from "@/app/helpers/constant";

const TaskHome = (props: any) => {
    const { userKey } = props
    const [tasks, setTasks] = useState<Task[]>([])
    const [isShowModal, setModal] = useState<boolean>(false)

    useEffect(() => {
        syncTasks();
    }, [])

    const syncTasks = async () => {
        if (userKey) {
            const userInfo: UserInfoMapDto[] = await getStoageData(userDataKey);
            const index = userInfo.findIndex(i => i.UserKey == userKey);
            if (index > -1) {
                setTasks(userInfo[index].Data)
            }
        }
    }

    const onAddTask = (task: Task) => {
        const newTasks = [...tasks];
        newTasks.push(task);
        setTasks(newTasks);
        setModal(false);
        onUpdateUserTasks(newTasks);
    }

    const onDelete = (id: string) => {
        const newTasks = tasks.filter(t => t.Id != id);
        setTasks(newTasks);
        onUpdateUserTasks(newTasks);
    }

    const onUpdateUserTasks = async (tasks: Task[]) => {
        if (userKey) {
            const userInfo: UserInfoMapDto[] = await getStoageData(userDataKey);
            const index = userInfo.findIndex(i => i.UserKey == userKey);

            if (index == -1) {
                userInfo.push({ UserKey: userKey, Data: tasks });
            }
            else {
                userInfo[index].Data = tasks;
            }

            await setStoageData(userDataKey, userInfo);
        }
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

                <Table tasks={tasks} onDelete={(val) => onDelete(val)} />
            </div>
        </div>
    );
}

export default TaskHome;