"use client"
import { form } from '@/commontypes/types'
import React, { memo } from 'react'
function Form({ classname, children,onsubmit }: form) {
    return (
    <form className={classname} autoComplete='off' onSubmit={onsubmit}>
      {children}
    </form>         
  )
}

export default memo(Form)
