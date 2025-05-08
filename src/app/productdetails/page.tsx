"use client" //client component

import { FaStar } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { increaseproductquantity, decreaseproductquantity } from '@/redux/Productslice'
import { addtocart } from '@/redux/cartslice'
import { Rootstate } from '@/redux/store'
import Image from 'next/image'
import { AppDispatch } from '@/redux/store'
import Loader from '@/components/Loader'
import Box from '@/components/Box'
import Text from '@/components/Text'
import Button from '@/components/Button'

function Productdetail() {
  // Initialize dispatch with correct type
  const dispatch: AppDispatch = useDispatch()

  // Select product details from Redux store
  const { productdetails } = useSelector((state: Rootstate) => state.product)

  return (
    <Box className="w-full min-h-screen pt-[130px] place-items-center place-content-center p-2">

      {/* Show loader if product details are not available */}
      {!productdetails ? (
        <Loader />
      ) : (
        <Box className="w-full md:w-[70%] h-auto md:h-[550px] lg:h-[500px] shadow-md shadow-slate-400 flex flex-col md:flex-row gap-4 p-2">

          {/* Product image or fallback message */}
          {productdetails?.image ? (
            <Box className="w-full h-[200px] md:w-[50%] md:h-full relative">
              <Image src={productdetails.image}
                className=' w-full h-full'
                fill
                quality={75}
                priority
                alt="Product image"
              />
            </Box>
          ) : (
            <Box className="w-full h-[200px] md:w-[50%] md:h-full bg-gray-200 flex items-center justify-center">
              <Text>No Image Available</Text>
            </Box>
          )}

          {/* Product details */}
          <Box className="space-y-2 font-bold text-center md:text-start w-full md:w-[50%] ">
            <Text className="text-2xl">{productdetails?.title}</Text>
            <Text className="text-2xl">
              Price: ${Math.floor(productdetails?.price)}
            </Text>
            <Text>
              {productdetails?.description?.slice(0, 130)}
            </Text>

            {/* Product rating */}
            <Box className="w-full text-black justify-center flex items-center md:justify-start">
              <FaStar /> {productdetails?.rating?.rate}
            </Box>

            {/* Quantity selector with + and - buttons */}
            <Box className="flex items-center justify-center md:justify-start">
              <Button
                onClick={() => {
                  dispatch(decreaseproductquantity())
                }}
                className="bg-black w-10 h-7 text-white mr-2"
              >
                -
              </Button>
              {productdetails.quantity}
              <Button
                onClick={() => {
                  dispatch(increaseproductquantity())
                }}
                className="bg-black w-10 h-7 ml-2 text-white"
              >
                +
              </Button>
            </Box>

            {/* Subtotal price */}
            <Text className="text-xl">
              Subtotal: ${productdetails?.subtotal}
            </Text>

            {/* Buy now and Add to Cart buttons */}
            <Box className="flex justify-center md:justify-start gap-3 flex-wrap">
              <Button className="bg-black w-[100px] h-10 text-white">
                Buy now
              </Button>
              <Button
                onClick={() => {
                  dispatch(addtocart(productdetails))
                }}
                className="bg-black w-[100px] h-10 text-white"
              >
                Add to cart
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default Productdetail
