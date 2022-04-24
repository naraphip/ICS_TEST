import React, { useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import PostCard from '../Component/PostCard'
import { data } from '../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';




export default function Home() {



    const [query, setQuery] = useState("");
    const [select, setSelect] = useState("");
    // console.log(data.filter(data => data.categories[0].toLowerCase().includes('cafe')))
    // console.log(select)
    // console.log(data.filter(data => data.categories[0].toLowerCase().includes(select)))


    return (

        <Container className='home' fluid="md">

            <div className='header-home'>
                <div>
                    <p className='title-place'>Place List</p>
                </div>
                <div className='section-search'>
                    {/* select ยัง select ไม่ได้*/}
                    <div className='div-select'>
                        <select className='select' onClick={(e) => setSelect(e.target.value)} >
                            <option selected >Select</option>
                            <option value="cafe">Cafe</option>
                            <option value="bakery">Bakery</option>
                            <option value="restaurant">Restaurant</option>
                        </select>
                    </div>
                    {/* line between select and search*/}
                    <div className='div-solid'>
                    </div>
                    {/* search ค้นหาได้*/}
                    <div className='div-search'>

                        <input
                            type="text"
                            placeholder="Search name"
                            className="search"
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <FontAwesomeIcon className='icon-search' icon={faSearch} />
                    </div>
                </div>
            </div>

            <Row>
                {data.filter(data => data.name.toLowerCase().includes(query)).map(data => (
                    <Col md="4">
                        <PostCard key={data.id} data={data} />
                    </Col>
                ))}
            </Row>


            <div className='div-pagination'>
                <Stack  >
                    <Pagination count={1} variant="outlined" color="primary" />
                </Stack>
            </div>
        </Container>
    )
}