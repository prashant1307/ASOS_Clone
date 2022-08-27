import { Box, Center, Divider, Flex, Spacer, Text } from "@chakra-ui/react"
import { Footer } from "../Components/Footer"
import { Navbar } from "../Components/Navbar"
import {FiTruck} from "react-icons/fi";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function getCart(){
    return axios.get("https://asos-server123.herokuapp.com/api/cart")
}
export const Cart=()=>{
const [data,setData]=useState([])
    useEffect(()=>{
         getCart().then((res)=>{
            console.log(res.data)
            setData(res.data)
         })
    },[])
    return (
        <>
        <Navbar/>
        <Box paddingTop="30px" bg="rgb(238,238,238)">
        <Flex margin="auto" w="900px">
            <Box>
                
                    <Flex paddingLeft="20px" paddingRight="20px" marginBottom="20px" paddingTop="20px" paddingBottom="20px" w="510px" bg="white">
                        <Text fontWeight="600" fontSize="18.4px" color="RGB(45, 45, 45)" fontFamily="Arial">MY BAG</Text>
                        <Spacer/>
                        <Text>Items are reserved for 60 minutes</Text> 
                    </Flex>
                    {data?.map((item)=>(
                        <Flex marginBottom="20px" w="510px" paddingBottom="20px" paddingTop="20px" paddingLeft="20px" paddingRight="20px" bg="white">
                            <Box w="120px">
                                <img  src={item.image} alt="" />
                            </Box>
                            <Spacer/>
                            <Box paddingLeft="30px" w="360px">
                                <Text textAlign="left">$ {item.price}</Text>
                                <Text textAlign="left">{item.title}</Text>

                            </Box>
                        </Flex>
                    ))}
                



                <Box paddingTop="20px" paddingBottom="20px" paddingLeft="20px" paddingRight="20px" bg="white">
                    <Flex>
                        <Box paddingTop="20px" paddingLeft="30px" w="100px">
                    <FiTruck  size="30px"/>
                    </Box>
                    <Box>
                    <Text textAlign="left">FREE* STANDARD DELIVERY</Text>
                    <Text textAlign="left">Faster delivery options available to most countries.</Text>
                    </Box>
                    </Flex>
                </Box>
            </Box>
            <Spacer/>
            <Box paddingTop="20px" paddingBottom="20px" paddingLeft="20px" paddingRight="20px"   w="360px" bg="white">
                <Text textAlign="left" fontWeight="600" fontSize="18.4px" color="RGB(45, 45, 45)" fontFamily="Arial">TOTAL</Text>
                <Center height='25px'>
                 <Divider orientation='horizontal' />
            </Center>
            <Text textAlign="left" fontWeight="600" fontSize="16.4px" color="RGB(45, 45, 45)" fontFamily="Arial">Sub-total</Text>
            <Text textAlign="left" fontWeight="600" fontSize="16.4px" color="RGB(45, 45, 45)" fontFamily="Arial">Delivery</Text>
            <Text marginTop="15px" textAlign="left">Standard Delivery ($ 6.50)</Text>
            <Center height='25px'>
                 <Divider orientation='horizontal' />
            </Center>
            </Box>
        </Flex>
        </Box>
        <Footer/>
        </>
    )
} 