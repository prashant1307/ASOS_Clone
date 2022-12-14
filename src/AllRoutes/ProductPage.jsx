
import { Footer } from "../Components/Footer"
import { Navbar } from "../Components/Navbar"
import axios from "axios";
import { useEffect, useState } from "react";
import { Box, Button, Flex, Grid, Select, Spacer, Text } from "@chakra-ui/react";
function getProducts(params={}){
    console.log(params.order)
    return axios.get(`https://asos-server123.herokuapp.com/api/products`,{
        params:{
           color:params.color||null,
           brand:params.brand||null,
           category:params.category||null,
           _sort:"price",
           _order:params.order||null
        } 
    })
}
function postCart(item){
    return axios.post("https://asos-server123.herokuapp.com/api/cart",{
        title:item.title,
        brand:item.brand,
        image:item.image,
        price:item.price,
        color:item.color,
        category:item.category,
        qty:item.qty
    })
}
export const ProductPage=()=>{
    const [data,setData]=useState([])
    const [brand,setBrand]=useState("")
    const [category,setCategory]=useState("")
    const [color,setColor]=useState("")
    const [order,setOrder]=useState("")
    useEffect(()=>{
        handleGetProducts(brand,color,category,order)
    },[brand,color,category,order])


    
    function handleGetProducts(brand,color,category,order){
        console.log(order)
        getProducts({
            brand:brand,
            color:color,
            category:category,
            order:order
        })
        .then((res)=>{
            setData(res.data)
        })
    }
    function handleCart(item){
      postCart(item)
    }

    return (
        <>
        <Navbar/>
        <Box paddingLeft="50px" marginBottom="30px" paddingRight="50px" paddingTop="30px" paddingBottom="30px" bg="rgb(238,238,238)">
            <Flex marginBottom="20px">
                <Select onChange={(e)=>setOrder(e.target.value)} border="2px" w="300px" placeholder="Sort">
                    <option value="DESC">Price high to low</option>
                    <option value="ASC">Price low to high</option>
                </Select>
                <Spacer/>
                <Select onChange={(e)=>setCategory(e.target.value)} border="2px" w="300px" placeholder="Category">
                    <option value="footwear">Footwear</option>
                    <option value="cap">Caps</option>
                    <option value="t-shirt">T-shirts</option>
                    <option value="sweatshirt">Sweatshirt</option>
                    <option value="backpack">Backpacks</option>
                </Select>
                <Spacer/>
                <Select onChange={(e)=>setBrand(e.target.value)} border="2px" w="300px" placeholder="Brand">
                    <option value="adidas">adidas</option>
                    <option value="Calvin Klein">Calvin Klein</option>
                    <option value="Jack & Jones">Jack & Jones</option>
                    <option value="Levi's">Levi's</option>
                    <option value="Vans">Vans</option>

                </Select>
            </Flex>
            <Flex>
            
                <Select onChange={(e)=>setColor(e.target.value)} border="2px "  w="300px" placeholder="Colour">
                    <option value="white">White</option>
                    <option value="black">Black</option>
                    <option value="green">Green</option>
                    <option value="brown">Brown</option>
                    <option value="multi">Multi</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                </Select>
            </Flex>
        </Box>
        <Grid  gridTemplateColumns="repeat(3,1fr)" marginBottom="50px" gap="20px">
        {data?.map((item)=>
        (
            <Box paddingLeft="60px" paddingRight="60px" key={item.id}>
                <img src={item.image} alt="" />
                <Text paddingBottom="15px" color="RGB(45, 45, 45)" fontFamily="futura-pt, sans-serif" fontSize="14px" textAlign="left">{item.title}</Text>
                <Flex>
                <Text color="grey" fontWeight="700" fontFamily="futura-pt, sans-serif" fontSize="18px" textAlign="left">$ {item.price}</Text>
                <Spacer/>
                {/* <Text color="grey" fontWeight="700" fontFamily="futura-pt, sans-serif" fontSize="18px">add to cart</Text>*/}
                <Button onClick={()=>handleCart(item)}>Add to cart</Button>
                </Flex> 
                
            </Box>
        )
        )}
        </Grid>
        <Footer/>
        </>

    )
}