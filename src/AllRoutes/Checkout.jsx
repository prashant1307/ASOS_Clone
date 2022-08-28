import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

export const Checkout=()=>{
    const navigate=useNavigate()
    return (
        <>
        <Box bg="rgb(238,238,238)" height="700px">
            <Flex paddingTop="40px" paddingBottom="10px" w="400px" margin="auto"  >
            <img  src="https://my.asos.com/Content/images/asos-logo-2022-93x28.png" alt="" />
            <Spacer/>
            <Text fontWeight="500" fontSize="18px">CHECKOUT</Text>
            </Flex>
            <Box w="400px" paddingBottom="50px" paddingTop="50px" margin="auto"  bg="white">
                <Text paddingBottom="20px" fontSize="19px" fontWeight="600">Your Order Has been Successfully Placed</Text>
                <Text>THANK YOU </Text>
                <Text>For Shopping With Us...</Text>
                <Button marginTop="40px" onClick={()=>navigate("/")}>SHOP MORE</Button>
            </Box>

        </Box>
        </>
    )
}