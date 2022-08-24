import { Box, Flex, Spacer, Text } from "@chakra-ui/react"
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
export const Footer=()=>{
    return (
        <>
        <Flex paddingLeft="50px" paddingTop="40px" bg="rgb(238,238,238)" height="242px">
            <Box lineHeight="30px" w="300px" textAlign="left">
                <Text fontSize="14px" fontWeight="900" color="RGB(102, 102, 102)" fontFamily="futura-pt, sans-serif" >HELP & INFORMATION</Text>
                <Text color="#666666">Help</Text>
                <Text color="#666666">Track order</Text>
                <Text color="#666666">Delivery & returns</Text>
            </Box>
            <Box lineHeight="30px" w="300px" textAlign="left">
                <Text fontSize="14px" fontWeight="900" color="RGB(102, 102, 102)" fontFamily="futura-pt, sans-serif">ABOUT ASOS</Text>
                <Text color="#666666">About us</Text>
                <Text color="#666666">Careers at ASOS</Text>
                <Text color="#666666">Corporate responsibility</Text>
                <Text color="#666666">Investor's site</Text>
            </Box>
            <Box lineHeight="30px" w="300px" textAlign="left">
                
                <Text fontSize="14px" fontWeight="900" color="RGB(102, 102, 102)" fontFamily="futura-pt, sans-serif">MORE FROM ASOS</Text>
                <Text color="#666666">Mobile and ASOS apps</Text>
                <Text color="#666666">ASOS Marketplace</Text>
                <Text color="#666666">Gift vouchers</Text>
                <Text color="#666666">Black Friday</Text>
                <Text color="#666666">ASOS x Thrift+</Text>
            </Box>
            <Box lineHeight="30px" w="300px" textAlign="left">
                <Text fontSize="14px" fontWeight="900" color="RGB(102, 102, 102)" fontFamily="futura-pt, sans-serif">SHOPPING FROM:</Text>
                <Flex>
                <Text color="#666666">You're in  - </Text>
                
                <img width="25px" height="18px" src="https://assets.asosservices.com/storesa/images/flags/in.png" alt="" />
                <Text marginRight="10px" marginLeft="10px">l</Text>
                <Text>CHANGE</Text>
                </Flex>
                
            </Box>
        </Flex>
        <Flex paddingLeft="10px" paddingRight="10px" alignItems="center" height="50px" bg="rgb(221,221,221)">
          <Box>
            <Flex>
            <AiOutlineCopyrightCircle/>
            <Text marginLeft="10px">2022 ASOS</Text>
            </Flex>
          </Box>
          <Spacer/>
          <Box>
            <Flex>
                <Text>Privacy & Cookies</Text>
                <Text marginRight="10px" marginLeft="10px">l</Text>
                <Text>Ts&Cs</Text>
                <Text marginRight="10px" marginLeft="10px">l</Text>
                <Text>Accessibility</Text>
            </Flex>
          </Box>
        </Flex>
        </>
    )
}