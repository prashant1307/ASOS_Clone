import { Box, Button, Flex, Img, Spacer, Text } from "@chakra-ui/react"

export const Body=()=>{
    return (
        <>
        <Box margin="auto" w="1258px" height="600px">
            <img src="https://content.asos-media.com/-/media/homepages/unisex/events-2022/wk52-red-pen/heros/desktop/row/mw_row_desktop-hero.jpg" alt="" />
        </Box>
        <Box marginBottom="60px" >
        <Flex  margin="auto" w="1258px" marginTop="50px">
            <Box  w="300px" >
                <img src="https://content.asos-media.com/-/media/homepages/unisex/events-2022/wk52-red-pen/features/mw/mw-cat-tray_deals-under-x.jpg" alt="" />
                <Text marginTop="18px" fontWeight="700" fontSize="18px">BIGGEST DEALS</Text>
                <Text>*Screams in discount*</Text>
            </Box>
            <Spacer/>
            <Box  w="300px" >
                <img src="https://content.asos-media.com/-/media/homepages/unisex/events-2022/wk52-red-pen/features/mw/mw-cat-tray_summer-vacay.jpg" alt="" />
                <Text marginTop="18px" fontWeight="700" fontSize="18px">HOLIDAY LOOKS</Text>
                <Text>Final-getaway garms</Text>
            </Box>
            <Spacer/>
            <Box  w="300px">
                <img src="https://content.asos-media.com/-/media/homepages/unisex/events-2022/wk52-red-pen/features/mw/mw-cat-tray_shirts-under-x.jpg" alt="" />
                <Text marginTop="18px" fontWeight="700" fontSize="18px">T-SHIRTS & SHIRTS</Text>
                <Text>Top(s)-tier looks</Text>
            </Box>
            <Spacer/>
            <Box  w="300px">
                <img src="https://content.asos-media.com/-/media/homepages/unisex/events-2022/wk52-red-pen/features/mw/mw-cat-tray-_new-season.jpg" alt="" />
                <Text marginTop="18px" fontWeight="700" fontSize="18px">LIGHTWEIGHT LAYERS</Text>
                <Text>Peak autumn prep</Text>
            </Box>
        </Flex>
        </Box>
        <Box  margin="auto" w="1258px">
            <Text fontWeight="700" fontFamily="futura-pt, FuturaStd, Helvetica, Arial, sans-serif" fontSize="24px" color="RGB(0, 0, 0)">TRENDING BRANDS</Text>
            <Flex>
                <Box>
                    <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/tommy-hilfiger-hp-logos-256x256.jpg" alt="" />
                </Box>
                <Box>
                    <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/north-face.png" alt="" />
                </Box>
                <Box>
                    <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/nike-hp-logos-256x256.jpg" alt="" />
                </Box>
                <Box>
                    <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/carhartt-hp-logos-256x256.jpg" alt="" />
                </Box>
                <Box>
                    <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/ellesse-hp-logos-256x256.jpg" alt=""/>
                </Box>
                <Box>
                    <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/dr-martens-hp-logos-256x256.jpg" alt="" />
                </Box>
            </Flex>
        </Box>
        <Flex paddingLeft="100px" paddingRight="100px" margin="auto" w="1258px">
            <Box  w="500px" height="801px">
            <img src="https://content.asos-media.com/-/media/homepages/unisex/events-2022/wk52-red-pen/moments/mw/mw_big-brands.jpg" alt="" />
            <Text marginTop="20px" fontWeight="600" fontSize="26px" fontFamily="futura-pt, FuturaStd, Helvetica, Arial, sans-serif">BIG BRANDS DEALS</Text>
            <Text fontSize="18px">Topman, New Balance & more!</Text>
            <Button marginTop="10px" variant="outline" _hover={{bg:"black", color:"white"}}>SHOP NOW</Button>
            </Box>
            <Spacer/>
            <Box  w="500px" height="801px">
            <img src="https://content.asos-media.com/-/media/homepages/unisex/events-2022/wk52-red-pen/moments/mw/mw-moment_summer-going-out.jpg" alt="" />
            <Text marginTop="20px" fontWeight="600" fontSize="26px" fontFamily="futura-pt, FuturaStd, Helvetica, Arial, sans-serif">GOING OUT-OUT</Text>
            <Text fontSize="18px">HOT summer nights</Text>
            <Button marginTop="10px" variant="outline" _hover={{bg:"black", color:"white"}}>SHOP NOW</Button>
            </Box>
        </Flex>
        <Flex>
            
        </Flex>
        </>
    )
}