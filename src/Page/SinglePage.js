import React, { useEffect, useState } from 'react'
import { data } from '../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faCircle } from '@fortawesome/free-solid-svg-icons';
import { Col, Container, Row } from 'react-bootstrap';

export default function SingleCard(props) {
    let postId = props.match.params.id;

    const getPost = data.filter((element) => element.id == postId);
    

    const post = getPost;

    const [images, setImages] = useState([]);
    const [times, setTimes] = useState([]);
    const [index, setIndex] = useState(0);

    if ((!document.mozFullScreen && !document.webkitIsFullScreen)) {
        //FullScreen is disabled
    } else {
    }

    useEffect(() => {
        setImages(post[0].images);
        setTimes(post[0].operation_time);

    }, [])

    function goBlack() {
        props.history.push('/')
    }

    return (
        <Container className='single-post' fluid="md">

            <div>
                <button className='button-18' onClick={goBlack}>
                    <FontAwesomeIcon className='icon-angle-left' icon={faAngleLeft} />
                    BACK
                </button>
            </div>

            <div className='menubar'>
                <div className={index === 0? 'active-tabs' : 'menu1'} onClick={() => { setIndex(0) }}>
                    INFORMATION
                </div>
                <div className={index === 1? 'active-tabs' : 'menu2'} onClick={() => { setIndex(1) }}>
                    IMAGE
                </div>
            </div>

            {/* ซ่อน class นี้ถ้าอยู่ในหน้าจอที่มีขนาดใหญ่(คอมพิวเตอร์ หรืออุปกรณ์ที่มีหน้าจอใหญ่กว่า 480px)*/}
            <div className='min-screen'>
                <div className='content-single-post'>
                    <div className='left-content' hidden={index !== 0}>
                        <div className='section-img-profile'>
                            <img className='img-profile-post' src={post[0].profile_image_url} alt='' />
                        </div>

                        <div className='section-detail'>
                            <div className='section-header'>
                                <p className='name-post'>{post[0].name}</p>
                                <div className='section-rate-post'>
                                    <p className='span-icon-post'>
                                        <FontAwesomeIcon icon={faCircle} />
                                    </p>
                                    <p className="rate-postcard-post">
                                        {(post[0].rating).toFixed(1)}
                                    </p>
                                </div>

                            </div>
                            <div>
                                <div className='section-row'>
                                    <div className='section-col1'>
                                        <p className='text-header'>Address :</p>
                                    </div>
                                    <div className='section-col2'>
                                        <p className='text-detail'>{post[0].address}</p>
                                    </div>
                                </div>
                                <div className='section-row'>
                                    <div className='section-col1'>
                                        <p className='text-header'>Opening Hour :</p>
                                    </div>
                                    <div className='section-col2'>
                                        {times.map(data => (
                                            <p className='text-detail' key={data.times}>
                                                {data.day}
                                                <span> : </span>
                                                {data.time_open} AM
                                                <span> - </span>
                                                {data.time_close} PM
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='right-content' hidden={index !== 1}>
                        <div className='section-title-img'>
                            <p className='title-img'>Images</p>
                        </div>
                        <div className='section-img-post'>
                            {images.map(data => (
                                <img className="img-single-post" key={data.images} src={data} alt='' />
                            ))}
                        </div>
                    </div>

                </div>
            </div>


            {/* ซ่อน class นี้ถ้าหน้าจอมีขนาดเล็ก(ในโทรศัพท์)*/}
            <div className='full-screen'>
                <div className='content-single-post'>
                    <div className='left-content'>
                        <div className='section-img-profile'>
                            <img className='img-profile-post' src={post[0].profile_image_url} alt='' />
                        </div>

                        <div className='section-detail'>
                            <div className='section-header'>
                                <p className='name-post'>{post[0].name}</p>
                                <div className='section-rate-post'>
                                    <p className='span-icon-post'>
                                        <FontAwesomeIcon icon={faCircle} />
                                    </p>
                                    <p className="rate-postcard-post">
                                        {(post[0].rating).toFixed(1)}
                                    </p>
                                </div>

                            </div>
                            <div>
                                <div className='section-row'>
                                    <div className='section-col1'>
                                        <p className='text-header'>Address :</p>
                                    </div>
                                    <div className='section-col2'>
                                        <p className='text-detail'>{post[0].address}</p>
                                    </div>
                                </div>
                                <div className='section-row'>
                                    <div className='section-col1'>
                                        <p className='text-header'>Opening Hour :</p>
                                    </div>
                                    <div className='section-col2'>
                                        {times.map(data => (
                                            <p className='text-detail' key={data.times}>
                                                {data.day}
                                                <span> : </span>
                                                {data.time_open} AM
                                                <span> - </span>
                                                {data.time_close} PM
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='right-content'>
                        <div className='section-title-img'>
                            <p className='title-img'>Images</p>
                        </div>
                        <div className='section-img-post'>
                            {images.map(data => (
                                <img className="img-single-post" key={data.images} src={data} alt='' />
                            ))}
                        </div>
                    </div>

                </div>
            </div>


        </Container>
    )
}