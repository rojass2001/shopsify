"use client"

import { store } from "../redux/store"
import React from "react"
import { Provider } from "react-redux"

export default function Providers({ children }: { children: React.ReactNode }) {
  // The Provider component from react-redux makes the Redux store available to any nested components.
  // The `store` is passed as a prop to the Provider, which gives access to the Redux store throughout the app.
  return <Provider store={store}>{children}</Provider>
}
