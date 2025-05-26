import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    return (
        <section className='main-page-wrapped'>
            <div className='bg-img'>
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className='main-heading bg-card     '>
                    <TypeAnimation
                        sequence={[
                            'Join the ARC Early Access List',
                            1000,
                            'Get Ready to Trade with ARC',
                            1000,
                            'Unlock Early Access Now',
                            1000,
                            '',
                            500,
                        ]}

                        wrapper="span"
                        speed={0.5}
                        style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </div>
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className='logo'>
                    <h1 className='framer-text' data-text-fill="true" >ARC</h1>
                </div>
                <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                    <div className='bg-card form-box'>
                        <form>
                            <div className='input-box w-half'>
                                <label>Email</label>
                                <input type='text' placeholder='Enter your Email' />
                            </div>
                            <div className='input-box w-half'>
                                <label>Phone</label>
                                <input type='text' placeholder='Enter your Phone' />
                            </div>
                            <div className='input-box w-half'>
                                <label>Country</label>
                                <input type='text' placeholder='Enter your Country' />
                            </div>
                            <div className='input-box w-half'>
                                <label>Account</label>
                                <input type='text' placeholder='Preferred account type' />
                            </div>
                            <div className='input-box w-half'>
                                <label>Age</label>
                                <input type='text' placeholder='Age' />
                            </div>
                            <div className='animated-button'>
                                <button className="glow-on-hover" type="button">JOIN WAITLIST</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Home