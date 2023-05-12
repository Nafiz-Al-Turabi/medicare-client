import React from 'react';
import { IoMdPulse,IoIosCall } from "react-icons/io";

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/5rRyRnj/banner-1.jpg" className="w-full " />
                <div className="absolute flex items-center h-full transform -translate-y-1/2 left-0  top-1/2  bg-gradient-to-r from-[#000]">
                    <div className='md:w-1/2 pl-2 md:pl-20 '>
                        <h1 className='text-2xl md:text-6xl font-bold text-white'>YOU AND YOUR DOCTOR</h1>
                        <p className='text-white mt-8 mb-6'>Donec libero dui, dapibus non leo et, molestie faucibus risus. In fermentum tortor et posuere laoreet. Morbi pharetra velit ut varius semper. Donec accumsan et lacus at posuere.</p>
                        <div className='flex invisible md:visible '>
                            <div className="flex items-center gap-5">
                                < IoMdPulse className='text-8xl text-slate-950 bg-[#02c3d8] w-20 h-10 p-1  rounded-3xl hover:bg-[#fff]' />
                                <div>
                                    <h3> REGULAR CHECKUPS</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, possimus!</p>
                                </div>
                            </div> 
                            <div className="flex items-center gap-5">
                                < IoIosCall className='text-8xl text-slate-950 bg-[#02c3d8] w-20 h-10 p-1  rounded-3xl hover:bg-[#fff]' />
                                <div>
                                    <h3> REGULAR CHECKUPS</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, possimus!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-3">
                    <a href="#slide4" className="md:btn md:btn-circle md:btn-warning">❮</a>
                    <a href="#slide2" className="md:btn md:btn-circle md:btn-warning">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src='https://i.ibb.co/rHCyNL8/banner-2.jpg' className="w-full" />
                <div className="absolute flex items-center h-full transform -translate-y-1/2 left-0  top-1/2  bg-gradient-to-r from-[#000]">
                    <div className='md:w-1/2 pl-2 md:pl-20 '>
                        <h1 className='text-2xl md:text-6xl font-bold text-white'>YOU AND YOUR DOCTOR</h1>
                        <p className='text-white mt-8 mb-6'>Donec libero dui, dapibus non leo et, molestie faucibus risus. In fermentum tortor et posuere laoreet. Morbi pharetra velit ut varius semper. Donec accumsan et lacus at posuere.</p>
                        <div className='flex invisible md:visible'> 
                            <div className="flex items-center gap-5">
                                < IoMdPulse className='text-8xl text-slate-950 bg-[#02c3d8] w-20 h-10 p-1  rounded-3xl hover:bg-[#fff]' />
                                <div>
                                    <h3> REGULAR CHECKUPS</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, possimus!</p>
                                </div>
                            </div> 
                            <div className="flex items-center gap-5">
                                < IoIosCall className='text-8xl text-slate-950 bg-[#02c3d8] w-20 h-10 p-1  rounded-3xl hover:bg-[#fff]' />
                                <div>
                                    <h3> REGULAR CHECKUPS</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, possimus!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-3">
                    <a href="#slide1" className="md:btn md:btn-circle md:btn-warning">❮</a>
                    <a href="#slide3" className="md:btn md:btn-circle md:btn-warning">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/jzNY9VV/benner-3.jpg" className="w-full" />
                <div className="absolute flex items-center h-full transform -translate-y-1/2 left-0  top-1/2  bg-gradient-to-r from-[#000]">
                    <div className='md:w-1/2 pl-2 md:pl-20 '>
                        <h1 className='text-3xl md:text-6xl font-bold text-white'>YOU AND YOUR DOCTOR</h1>
                        <p className='text-white mt-8 mb-6'>Donec libero dui, dapibus non leo et, molestie faucibus risus. In fermentum tortor et posuere laoreet. Morbi pharetra velit ut varius semper. Donec accumsan et lacus at posuere.</p>
                        <div className='flex invisible md:visible'> 
                            <div className="flex items-center gap-5">
                                < IoMdPulse className='text-8xl text-slate-950 bg-[#02c3d8] w-20 h-10 p-1  rounded-3xl hover:bg-[#fff]' />
                                <div>
                                    <h3> REGULAR CHECKUPS</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, possimus!</p>
                                </div>
                            </div> 
                            <div className="flex items-center gap-5">
                                < IoIosCall className='text-8xl text-slate-950 bg-[#02c3d8] w-20 h-10 p-1  rounded-3xl hover:bg-[#fff]' />
                                <div>
                                    <h3> REGULAR CHECKUPS</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, possimus!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-3">
                    <a href="#slide2" className="md:btn md:btn-circle md:btn-warning">❮</a>
                    <a href="#slide4" className="md:btn md:btn-circle md:btn-warning">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/5rRyRnj/banner-1.jpg" className="w-full" />
                <div className="absolute flex items-center h-full transform -translate-y-1/2 left-0  top-1/2  bg-gradient-to-r from-[#000]">
                    <div className='md:w-1/2 pl-2 md:pl-20 '>
                        <h1 className='text-2xl md:text-6xl font-bold text-white'>YOU AND YOUR DOCTOR</h1>
                        <p className='text-white mt-8 mb-6'>Donec libero dui, dapibus non leo et, molestie faucibus risus. In fermentum tortor et posuere laoreet. Morbi pharetra velit ut varius semper. Donec accumsan et lacus at posuere.</p>
                        <div className='flex invisible md:visible'> 
                            <div className="flex items-center gap-5">
                                < IoMdPulse className='text-8xl text-slate-950 bg-[#02c3d8] w-20 h-10 p-1  rounded-3xl hover:bg-[#fff]' />
                                <div>
                                    <h3> REGULAR CHECKUPS</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, possimus!</p>
                                </div>
                            </div> 
                            <div className="flex items-center gap-5">
                                < IoIosCall className='text-8xl text-slate-950 bg-[#02c3d8] w-20 h-10 p-1  rounded-3xl hover:bg-[#fff]' />
                                <div>
                                    <h3> REGULAR CHECKUPS</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, possimus!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-3">
                    <a href="#slide3" className="md:btn md:btn-circle md:btn-warning">❮</a>
                    <a href="#slide1" className="md:btn md:btn-circle md:btn-warning">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;