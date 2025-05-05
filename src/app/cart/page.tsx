'use client' // Required for using client-side hooks like useSelector, useEffect

import { FaStar, FaTrash } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import Carttotal from './Carttotal'
import { cartdecrease, cartincrease, removecart } from '../../redux/cartslice'
import Image from 'next/image'
import { AppDispatch, Rootstate } from '@/redux/store'
import Box from '@/components/Box'
import Text from '@/components/Text'
import Button from '@/components/Button'

const quantitybutton = "bg-blue-700 text-white w-9 h-6"

function Cart() {

  const dispatch: AppDispatch = useDispatch()
  const { cartproducts } = useSelector((state: Rootstate) => state.cart)

  return (
    <Box className="w-full pt-[120px] md:pt-[60px]">
      {/* Page Title */}
      <Box className="text-3xl py-4 bg-blue-700 font-bold text-white mb-5 text-center">
        Your Carts
      </Box>

      {/* Empty cart message */}
      {cartproducts.length < 1 ? (
        <Box className="w-full h-screen text-center text-blue-700 text-3xl font-bold">
          Your Cart is Empty
        </Box>
      ) : (
        <Box className="w-full min-h-screen px-2 flex flex-col-reverse md:flex-row gap-3 justify-around">
          
          {/* Left section: Cart items */}
          <Box className="w-full md:w-[60%]">
            {cartproducts?.map((a) => (
              <Box
                key={a.id}
                className="w-full mb-5 py-2 h-[300px] md:h-[250px] gap-2 text-blue-700 shadow-md shadow-gray-300 flex"
              >
                {/* Product image */}
                <Image
                  className="w-[40%] h-full object-contain"
                  src={a.image}
                  alt="no image"
                  width={100}
                  height={100}
                />

                {/* Product details */}
                <Box className="font-bold relative space-y-2">
                  <Text className="text-2xl">{a.title.slice(0, 38)}</Text>
                  <Text className="text-xl">${Math.floor(a.price)}</Text>
                  <Text className="flex gap-1 items-center text-xl">
                    <FaStar />
                    {a.rating}
                  </Text>

                  {/* Quantity control */}
                  <Box className="flex font-bold gap-2 mb-2">
                    <Button
                      onClick={() => { dispatch(cartdecrease(a.id)) }}
                      className={quantitybutton}
                    >
                      -
                    </Button>
                    {a.quantity}
                    <Button
                      onClick={() => { dispatch(cartincrease(a.id)) } }
                      className={quantitybutton}
                    >
                      +
                    </Button>
                  </Box>

                  {/* Subtotal and remove */}
                  <Text>subtotal: ${a.subtotal}</Text>
                  <Box
                    onClick={() => dispatch(removecart(a))}
                    className="w-14 grid place-items-center h-7 rounded-full text-xl bg-white shadow-md shadow-gray-300 cursor-pointer"
                  >
                    <FaTrash />
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Right section: Cart summary */}
          <Box className="w-full md:w-[30%] lg:w-[20%]">
            <Carttotal />
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default Cart
