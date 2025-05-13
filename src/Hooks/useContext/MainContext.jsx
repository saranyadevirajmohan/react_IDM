import React, { createContext } from 'react'
import FirstContext from './FirstContext'
import SecondContext from './SecondContext'

export const context=createContext("")
export default function MainContext() {
    let user="SARANYADEVI",location="erode";
    let obj={
        name:"erode idm",
        courses:[
            {software:"python",secure:"java"}
        ]
    }

    let overall={
        user,location,obj
    }
  return (
    <div>
        <context.Provider value={overall}>
            <FirstContext />
            <SecondContext />
        </context.Provider>
    </div>
  )
}
