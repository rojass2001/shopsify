import React, { memo } from 'react'

function Form({ classname, children }: { classname: string, children: React.ReactNode }) {
    
    return (
    <form className={classname}>
      {children}
    </form>         
  )
}

export default memo(Form)
