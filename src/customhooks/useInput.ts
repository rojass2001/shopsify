"use client"
import {  useState } from 'react'

export default function useInput<T>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);

type ChangeEvent={
    target: {
        name: string;
        value: string;
    };
}

  const handlechange = (e: ChangeEvent) => {
      const { name, value } = e.target;
      setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return { values, handlechange };
}