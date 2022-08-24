import { Box, Button, Center, Divider, Flex, Image, Input, Spacer, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export const Login=()=>{
    return (
        <>
        <Box bg="#EEEEEE" paddingBottom="100px">
        <Box paddingTop="70px" paddingBottom="30px" margin="auto" w="650px">
        <Link to="/"><Image margin="auto" src="https://my.asos.com/Content/images/asos-logo-2022-93x28.png" alt="logo"/></Link>
        </Box>
        <Box paddingTop="40px" margin="auto"  w="650px" bg="rgb(255,255,255)" >
            <Flex  margin="auto">
                <Spacer/>
                <Text  fontWeight="700" fontSize="14px" color="RGB(118, 118, 118)"><Link to="/signup">JOIN</Link></Text>
                <Spacer/>
                <Center height='25px'>
                 <Divider orientation='vertical' />
                </Center>
                <Spacer/>
                <Text fontWeight="700" fontSize="14px" color="RGB(118, 118, 118)"><Link to="/login">SIGN IN</Link></Text>
                <Spacer/>
            </Flex>
            <Center height='25px'>
                 <Divider orientation='horizontal' />
            </Center>
         
            <Text marginTop="30px" marginBottom="10px" paddingLeft="143px" textAlign="left" fontWeight="600" fontSize="16px" color="RGB(118, 118, 118)">EMAIL ADDRESS:</Text>
            <Input w="360px" height="50px"/>
            <Text marginTop="30px" marginBottom="10px" paddingLeft="143px" textAlign="left" fontWeight="600" fontSize="16px" color="RGB(118, 118, 118)">PASSWORD:</Text>
            <Input w="360px" height="50px"/>

            <Button marginBottom="40px" bg="rgb(45,45,45)" color="white" marginTop="30px" w="360px">SIGN IN</Button>
        </Box>
        </Box>
        </>
    )
}