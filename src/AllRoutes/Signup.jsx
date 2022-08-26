import { Box, Button, Center, Divider, Flex, FormLabel, Image, Input, Spacer, Text } from "@chakra-ui/react"
import { useState } from "react"
import GoogleButton from "react-google-button"
import { Link, useNavigate } from "react-router-dom"
import { UseUserAuth } from "../Context/AuthContext"
export const Signup=()=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState("")
    const {signUp}=UseUserAuth()
    const {googleSignIn}=UseUserAuth()
    const navigate=useNavigate()
    const handleSubmit=async(e)=>{
        e.preventDefault()
        setError("")
        try {
            await signUp(email,password)
            navigate("/login")
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
        <Box paddingTop="40px" margin="auto" w="650px" bg="rgb(255,255,255)" >
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
             <Text marginTop="20px"  fontWeight="600" fontSize="20px" color="black">SIGN UP WITH...</Text>
             <Box paddingBottom="10px" paddingTop="20px"  margin="auto" w="240px"><GoogleButton type="dark" onClick={handleGoogleSignIn}/></Box>
             <Text>Signing up with social is super quick. No extra passwords to remember - no brain fail. Don't worry, we'd never share any of your data or post anything on your behalf #notevil</Text>
             <Text marginTop="20px"  fontWeight="600" fontSize="20px" color="black">OR SIGN UP WITH EMAIL...</Text>
            <form onSubmit={handleSubmit}>
                {/* <FormLabel>email</FormLabel> */}
                <Text marginTop="10px" marginBottom="10px" paddingLeft="143px" textAlign="left" fontWeight="600" fontSize="16px" color="RGB(118, 118, 118)">EMAIL ADDRESS:</Text>
                <Input w="360px" height="50px" type="email" onChange={(e)=>setEmail(e.target.value)}/>
                <Text marginTop="30px" marginBottom="10px" paddingLeft="143px" textAlign="left" fontWeight="600" fontSize="16px" color="RGB(118, 118, 118)">FIRST NAME:</Text>
            <Input w="360px" height="50px"/>
            <Text marginTop="30px" marginBottom="10px" paddingLeft="143px" textAlign="left" fontWeight="600" fontSize="16px" color="RGB(118, 118, 118)">LAST NAME:</Text>
            <Input w="360px" height="50px"/>
                {/* <FormLabel>password</FormLabel> */}
                <Text marginTop="30px" marginBottom="10px" paddingLeft="143px" textAlign="left" fontWeight="600" fontSize="16px" color="RGB(118, 118, 118)">PASSWORD:</Text>
                <Input w="360px" height="50px" type="password" onChange={(e)=>setPassword(e.target.value)}/>
                <Button marginBottom="40px" bg="rgb(45,45,45)" type="submit" color="white" marginTop="30px" w="360px">JOIN ASOS</Button>
                {/* <Button type="submit">Submit</Button> */}
            </form>
            {/* <Text marginTop="20px" fontWeight="600" fontSize="20px" fontFamily="futura-pt, Tahoma, Geneva, Verdana, Arial, sans-serif" color="RGB(34, 34, 34)">SIGN UP WITH...</Text> */}

            {/* <Text marginTop="20px" fontWeight="600" fontSize="20px" fontFamily="futura-pt, Tahoma, Geneva, Verdana, Arial, sans-serif" color="RGB(34, 34, 34)">SIGN UP WITH EMAIL</Text>
            <Text marginTop="30px" marginBottom="10px" paddingLeft="143px" textAlign="left" fontWeight="600" fontSize="16px" color="RGB(118, 118, 118)">EMAIL ADDRESS:</Text>
            <Input w="360px" height="50px"/>
            <Text marginTop="10px" paddingLeft="143px" textAlign="left">We'll send your order confirmation here</Text>
            <Text marginTop="30px" marginBottom="10px" paddingLeft="143px" textAlign="left" fontWeight="600" fontSize="16px" color="RGB(118, 118, 118)">FIRST NAME:</Text>
            <Input w="360px" height="50px"/>
            <Text marginTop="30px" marginBottom="10px" paddingLeft="143px" textAlign="left" fontWeight="600" fontSize="16px" color="RGB(118, 118, 118)">LAST NAME:</Text>
            <Input w="360px" height="50px"/>
            <Text marginTop="30px" marginBottom="10px" paddingLeft="143px" textAlign="left" fontWeight="600" fontSize="16px" color="RGB(118, 118, 118)">PASSWORD:</Text>
            <Input w="360px" height="50px"/>
            <Text  marginTop="10px" paddingLeft="143px" textAlign="left">Must be 10 or more characters</Text> */}
            {/* <Input
              marginTop="30px"
              w="360px"
              height="50px"
              placeholder="Select Date and Time"
              type="datetime-local"
            />
            
            <Text marginTop="30px" marginBottom="10px" paddingLeft="143px" textAlign="left" fontWeight="600" fontSize="16px" color="RGB(118, 118, 118)">MOSTLY INTERESTED IN:</Text> */}

            {/* <Button marginBottom="40px" bg="rgb(45,45,45)" color="white" marginTop="30px" w="360px">JOIN ASOS</Button> */}
        </Box>
        </Box>
        </>
    )
}