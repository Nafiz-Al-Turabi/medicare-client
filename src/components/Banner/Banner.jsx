import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/5rRyRnj/banner-1.jpg" className="w-full " />
                <div className="absolute flex items-center h-full transform -translate-y-1/2 left-0  top-1/2  bg-gradient-to-r from-[#000]">
                    <div className='md:w-1/2 pl-2 md:pl-20 '>
                        <h1 className='text-2xl md:text-6xl font-bold text-white'>Affordable Price For Car Servicing</h1>
                        <p className='text-white mt-8 mb-6'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-warning mr-3">Discover more</button>
                        <button className="btn btn-outline btn-warning">Latest project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-3">
                    <a href="#slide4" className="btn btn-circle btn-warning">❮</a>
                    <a href="#slide2" className="btn btn-circle btn-warning">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src='https://i.ibb.co/rHCyNL8/banner-2.jpg' className="w-full" />
                <div className="absolute flex items-center h-full transform -translate-y-1/2 left-0  top-1/2  bg-gradient-to-r from-[#000]">
                    <div className='md:w-1/2 pl-2 md:pl-20 '>
                        <h1 className='text-2xl md:text-6xl font-bold text-white'>Affordable Price For Car Servicing</h1>
                        <p className='text-white mt-8 mb-6'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-warning mr-3">Discover more</button>
                        <button className="btn btn-outline btn-warning">Latest project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-3">
                    <a href="#slide1" className="btn btn-circle btn-warning">❮</a>
                    <a href="#slide3" className="btn btn-circle btn-warning">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/jzNY9VV/benner-3.jpg" className="w-full" />
                <div className="absolute flex items-center h-full transform -translate-y-1/2 left-0  top-1/2  bg-gradient-to-r from-[#000]">
                    <div className='md:w-1/2 pl-2 md:pl-20 '>
                        <h1 className='text-3xl md:text-6xl font-bold text-white'>Affordable Price For Car Servicing</h1>
                        <p className='text-white mt-8 mb-6'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-warning mr-3">Discover more</button>
                        <button className="btn btn-outline btn-warning">Latest project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-3">
                    <a href="#slide2" className="btn btn-circle btn-warning">❮</a>
                    <a href="#slide4" className="btn btn-circle btn-warning">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/5rRyRnj/banner-1.jpg" className="w-full" />
                <div className="absolute flex items-center h-full transform -translate-y-1/2 left-0  top-1/2  bg-gradient-to-r from-[#000]">
                    <div className='md:w-1/2 pl-2 md:pl-20 '>
                        <h1 className='text-2xl md:text-6xl font-bold text-white'>Affordable Price For Car Servicing</h1>
                        <p className='text-white mt-8 mb-6'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-warning mr-3">Discover more</button>
                        <button className="btn btn-outline btn-warning">Latest project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-3">
                    <a href="#slide3" className="btn btn-circle btn-warning">❮</a>
                    <a href="#slide1" className="btn btn-circle btn-warning">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;