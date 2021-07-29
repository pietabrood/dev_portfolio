import React from 'react'
import {Box,HStack} from '@chakra-ui/react'
import { Text } from "@chakra-ui/react"

export default function card(props) {
    return (
        <Box xs={5} className="item">
            <img className="item-img" src={props.details.img}></img>
            <div className="hidden">
                <div>
                    <h5><b>{props.details.name}</b></h5>
                    <p>{props.details.description}</p>
                    <HStack spacing='4'>
                        <div>
                            <p><b>Backend:</b></p>
                            <list>
                                {props.details.backend.map(item => 
                                    <li>{item}</li>
                                )}
                            </list>
                        </div>
                        <div>
                            <p><b>Frontend:</b></p>
                            <list>
                                {props.details.frontend.map(item => {
                                    return <li>{item}</li>
                                })}
                            </list>
                        </div>
                    </HStack>
                    <br/>
                </div>
                
                <HStack spacing={'5px'} textAlign={'center'}>
                    {props.details.links.map(item => {
                        return <a href={item.url} target="_blank">{item.name}</a>
                    })}
                    
                    {/* <a href="https://github.com/pietabrood/Mibrary" target="_blank"><b>Code</b></a> */}
                </HStack>
            </div>
        </Box>
    )
}
