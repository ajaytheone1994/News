import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper, Button} from '@material-ui/core'
 
export default function Slider(props)
{
    var items = [
        {
             image:'chitra.jpg'
        },
        {
          image:'neha.png' 
        },
        {
           image:'poornima.jpg'  
        },
        {
            image:'anjana.jpg'
        }
    ]
 
    return (
        <Carousel>
            {
                items.map( item => <Item item={item} /> )
            }
        </Carousel>
    )
}
 
function Item(props)
{
    return (
        <Paper>
            <img src={require(`../../../assets/images/${props.item.image}`)}  style={{maxHeight:'100%', maxWidth:'100%'}}/>
        </Paper>
    )
}