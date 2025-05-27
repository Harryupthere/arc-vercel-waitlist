import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import Select from 'react-select';

const customStyles = {
    control: (base) => ({
        ...base,
        backgroundColor: '#000',
        borderRadius: '30px',
        border: '0.5px solid rgba(153, 153, 153, 0.567)',
        padding: '0 2px',
        color: '#fff',
        outline: 'none',
        boxShadow: 'none',
        fontSize:'14px',
        height:'45px'
    }),
    menu: (base) => ({
        ...base,
        backgroundColor: '#000',
        color: '#fff',
        borderRadius: '10px',
        zIndex: 10,
        fontSize:'14px'
    }),
    option: (base, state) => ({
        ...base,
        backgroundColor: state.isFocused ? '#333' : '#000',
        color: '#fff',
        cursor: 'pointer',
    }),
    singleValue: (base) => ({
        ...base,
        color: '#fff',
    }),
    placeholder: (base) => ({
        ...base,
        fontSize: '14px',
        color: '#aaa',
        opacity:'0.7',
    }),
};

const Home = () => {
    const options = [
        { value: 'customised_instant', label: 'Customised Instant funding' },
        { value: 'customised_2step', label: 'Customised 2 step funding' },
        { value: 'standard_instant', label: 'Standard Instant funding' },
        { value: 'standard_2step', label: 'Standard 2 step funding' },
    ];
    return (
        <section className='main-page-wrapped'>
            <div className='bg-img'>
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className='main-heading bg-card     '>
                    <TypeAnimation
                        sequence={[
                            'Built for Traders',
                            1000,
                            'Backed by Professionals!',
                            1000,
                        ]}

                        wrapper="span"
                        speed={0.5}
                        style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </div>
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className='logo'>
                    {/* <h1 className='framer-text' data-text-fill="true" >ARC</h1> */}
                    <img src='images/logo.png'/>
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
                                <label>Preferred Account Type</label>
                                <Select
                                    options={options}
                                    styles={customStyles}
                                    placeholder="Select account"
                                    // value={value}
                                    // onChange={onChange}
                                    isSearchable={false}
                                />
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