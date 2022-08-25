import { Box, Button, Center, Divider, Flex, FormLabel, Image, Input, Spacer, Text } from "@chakra-ui/react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UseUserAuth } from "../Context/AuthContext"
import GoogleButton from "react-google-button"
export const Login=()=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState("")

    const {logIn,googleSignIn}=UseUserAuth()
    const navigate=useNavigate()
    const handleSubmit=async(e)=>{
        e.preventDefault()
        setError("")
        try {
            await logIn(email,password)
            navigate("/")
        } catch (error) {
            setError(error.message)
        }
    }
     const handleGoogleSignIn=async(e)=>{
        e.preventDefault()
        try {
            await googleSignIn();
            navigate("/")
        } catch (error) {
            setError(error.message)
        }
     }
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

            {error && <alert>{error}</alert>}
            <form onSubmit={handleSubmit}>
                <FormLabel>email</FormLabel>
                <Input type="email" onChange={(e)=>setEmail(e.target.value)}/>
                <FormLabel>password</FormLabel>
                <Input type="password" onChange={(e)=>setPassword(e.target.value)}/>
                <Button type="submit">Submit</Button>
                <GoogleButton type="dark" onClick={handleGoogleSignIn}/>
            </form>
            <Box><GoogleButton type="dark" onClick={handleGoogleSignIn}/></Box>
          
            {/* <Text marginTop="30px" marginBottom="10px" paddingLeft="143px" textAlign="left" fontWeight="600" fontSize="16px" color="RGB(118, 118, 118)">EMAIL ADDRESS:</Text>
            <Input w="360px" height="50px"/>
            <Text marginTop="30px" marginBottom="10px" paddingLeft="143px" textAlign="left" fontWeight="600" fontSize="16px" color="RGB(118, 118, 118)">PASSWORD:</Text>
            <Input w="360px" height="50px"/> */}

            {/* <Button marginBottom="40px" bg="rgb(45,45,45)" color="white" marginTop="30px" w="360px">SIGN IN</Button> */}
        </Box>
        </Box>
        </>
    )
}