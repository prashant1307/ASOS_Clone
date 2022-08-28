import { Box, Button, Center, Divider, Flex, Heading, Input, InputGroup, InputRightAddon, InputRightElement, Spacer, Text } from "@chakra-ui/react";
import { BsBag } from 'react-icons/bs';
import {FiHeart} from "react-icons/fi";
import {MdAccountBox} from "react-icons/md";
import {Search2Icon} from "@chakra-ui/icons";


import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import {
    useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
    useColorModeValue,
} from "@chakra-ui/react";
import { UseUserAuth } from "../Context/AuthContext";
import { Logout } from "./Logout";
import { Link, Navigate, useNavigate } from "react-router-dom";

library.add(fas)



export const Navbar=()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {user}=UseUserAuth()
    const navigate=useNavigate()
    const handleClick=()=>{
        console.log("hello")
        navigate("/products")
    }
    return (
        <>
    
    {/* <FontAwesomeIcon icon={faCoffee} />
    <FontAwesomeIcon icon="fa-solid fa-check-square" />
    <FontAwesomeIcon style={{"--fa-border-color": "red","--fa-primary-color": "green"}} icon="fa-solid fa-cart-shopping" />
    <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
    <FontAwesomeIcon icon="fa-duotone fa-cart-shopping" /> */}
            <Flex alignItems='center'  paddingLeft="60px" paddingRight="50px"   height="60px" bg={"rgb(45,45,45)"}>
                <Box  w="66.66px" >
                    <img onClick={()=>navigate("/")} src="data:image/png;base64,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" alt="logo" />
                </Box>
                <Box  w="113px" paddingLeft="20px" color="white" ><Text>WOMEN</Text></Box>
                <Box  w="114px"  color="white" ><Text>MEN</Text></Box>
                <Box w="695px" paddingRight="40px">
                    <InputGroup paddingLeft="30px"  w="650px">
                    <Input borderRadius="22px" bg="white" placeholder="Search for items and brands"/>
                    <InputRightElement children={<Search2Icon/>}/>
                    </InputGroup>
                </Box>
                {user?<Box  w="120px"  color="white" paddingRight="10px"><Text>{user.email}</Text></Box>:<Box  w="83px"  color="white" ><MdAccountBox onClick={()=>navigate("/signup")} size="30px"/></Box>}
                {/* <Box  w="113px"  color="white" paddingRight="10px"><Text onClick={()=>navigate("/signup")}>Signup/Login</Text></Box> */}
                <Box  w="83px"  color="white" ><FiHeart  size="30px"/></Box>
                {/* <Box  w="113px"  color="white" ><Text onClick={()=>navigate("/cart")}>Cart</Text></Box> */}
                <Box  w="113px"  color="white" ><BsBag onClick={()=>navigate("/cart")} color="white" size="30px"/></Box>
                {user?<Logout/>:null}

                {/* <Box margin="auto"  w="50px" border="1px solid white"><BsBag color="white" size="30px"/></Box> */}
                {/*
                <Box bg="white" w="50px" border="1px solid white"><BsBag size="30px"/></Box>
                <Box bg="white" w="50px" border="1px solid white"><BsBag size="30px"/></Box> */}
                
            </Flex>

            <Flex paddingLeft="20px" paddingRight="300px" alignItems="center" height="50px" bg="rgb(82,80,80)">
            <Box  height="50px" paddingLeft="10px" paddingRight="10px" bg="rgb(208,19,69)">    
            <Text marginTop="12px" fontWeight="normal" fontSize="16px" color="white">Sale</Text> 
            </Box> 
            <Menu isOpen={isOpen}>
            <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
                color="white"
            >
               New in {/* More {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />} */}
            </MenuButton>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                <Flex>
                <Box marginRight="100px">
                <MenuItem><Text fontSize="18px" fontWeight="600" textDecorationLine="underline">NEW PRODUCTS</Text></MenuItem>
                <MenuItem onClick={handleClick}>View all</MenuItem>
                <MenuItem><Text>Clothing</Text></MenuItem>
                <MenuItem><Text>Shoes</Text></MenuItem>
                <MenuItem><Text>Accessories</Text></MenuItem>
                <MenuItem><Text>Face + Body</Text></MenuItem>
                <MenuItem><Text>Topman</Text></MenuItem>
                <MenuItem><Text>Back in stock</Text></MenuItem>
                <MenuItem><Text>Outlet</Text></MenuItem>
                <MenuItem><Text>Trending now</Text></MenuItem>
                </Box>
                <Spacer/>
                <Center>
                 <Divider orientation='vertical' />
                </Center>
                <Spacer/>
                <Box>
                <MenuItem><Text fontSize="18px" fontWeight="600" textDecorationLine="underline">NEW EDITS</Text></MenuItem>
                <Flex>
                    <Box>
                    <MenuItem>
                    <Box>
                    <img src="https://images.asos-media.com/navigation/mw_global_transitional_insta_alpha_1650x1884?&$n_320w$" alt="" />
                    <Text>OFF-CAMPUS</Text>
                    </Box>
                    </MenuItem>
                    </Box>
                    <Box>
                    <MenuItem>
                    <Box>
                    <img src="https://images.asos-media.com/navigation/mw_global_topman_1650x1884?&$n_320w$" alt="" />
                    <Text>TOPMAN</Text>
                    </Box>
                    </MenuItem>
                    </Box>
                    <Box>
                    <MenuItem>
                    <Box>
                    <img src="https://images.asos-media.com/navigation/mw_global_insta_alpha_occasion_suits_1650x1884?&$n_320w$" alt="" />
                    <Text>GOLDEN HOUR</Text>
                    </Box>
                    </MenuItem>
                    </Box>
                </Flex>
                </Box>
                </Flex>
            </MenuList>
            </Menu>
            
            <Text fontWeight="normal" fontSize="16px" color="white">Clothing</Text>
            <Spacer/> 
            <Text fontWeight="normal" fontSize="16px" color="white">Shoes</Text> 
            <Spacer/> 
            <Text fontWeight="normal" fontSize="16px" color="white">Sportswear</Text> 
            <Spacer/> 
            <Text fontWeight="normal" fontSize="16px" color="white">Accessories</Text> 
            <Spacer/> 
            <Text fontWeight="normal" fontSize="16px" color="white">Summer</Text> 
            <Spacer/> 
            <Text fontWeight="normal" fontSize="16px" color="white">Trending now</Text> 
            <Spacer/> 
            <Text fontWeight="normal" fontSize="16px" color="white">Topman</Text> 
            <Spacer/> 
            <Text fontWeight="normal" fontSize="16px" color="white">Face + Body</Text> 
            <Spacer/> 
            <Text fontWeight="normal" fontSize="16px" color="white">Brands</Text> 
            <Spacer/> 
            <Box  height="50px" paddingLeft="10px" paddingRight="10px" bg="rgb(208,19,69)">    
            <Text marginTop="12px" fontWeight="normal" fontSize="16px" color="white">Outlet</Text> 
            </Box> 

      
            </Flex>
            <Flex >
                <Box w="50%" height="50px" bg="rgb(204,255,0)">
                    <Text fontWeight="700">GET AT LEAST AN EXTRA 15% OFF*</Text>
                    <Text fontWeight="700">WITH OUR SURPRISE CODE!</Text>
                    
                </Box>
                <Box paddingTop="12px" w="50%" height="50px" bg="rgb(0,0,0)">
                    <Text fontWeight="700" color="RGB(255, 255, 255)">FREE WORLDWIDE DELIVERY</Text>
                </Box>
            </Flex>
       
        </>
    )
}