import React, { useState, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation';
import Select from 'react-select';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
const apiUrl = 'https://myapi.myarcfunding.com/api/v1/'; // Replace with your actual API base URL

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
        fontSize: '14px',
        height: '45px'
    }),
    menu: (base) => ({
        ...base,
        backgroundColor: '#000',
        color: '#fff',
        borderRadius: '10px',
        zIndex: 10,
        fontSize: '14px',
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
        opacity: '0.7',
    }),
};

const countryStyle = {
    control: (base) => ({
        ...base,
        // position:'absolute',
        border: '0.5px solid rgba(153, 153, 153, 0.567)',
        borderRight: 'none',
        backgroundColor: '#000',
        borderRadius: '30px 0 0 30px',
        padding: '0',
        color: '#fff',
        outline: 'none',
        boxShadow: 'none',
        fontSize: '14px',
        height: '45px',
        minWidth: '120px',
        width: 'auto'
    }),
    dropdownIndicator: (base) => ({
        ...base,
        borderLeft: 'none', // removes the left border
        padding: '0',      // optional: adjust padding if needed
    }),
    indicatorSeparator: () => ({
        display: 'none',     // removes the vertical separator line
    }),
    menu: (base) => ({
        ...base,
        backgroundColor: '#000',
        color: '#fff',
        borderRadius: '10px',
        zIndex: 10,
        fontSize: '14px',
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
        opacity: '0.7',
    }),
};
const Home = () => {
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        country: null,
        accountType: null,
        ageRange: null,
        countryCode: '',
        name: ''
    });

    const [errors, setErrors] = useState({});
    const [countries, setCountries] = useState([])
    const [countriesCode, setCountriesCode] = useState([])

    const options = [
        { value: '8000', label: '$8,000' },
        { value: '15000', label: '$15,000' },
        { value: '25000', label: '$25,000' },
        { value: '50000', label: '$50,000' },
        { value: '100000', label: '$100,000' },
        { value: '200000', label: '$200,000' },
    ];


    const ageRange = [
        { value: 'below-18', label: 'below-18 Years' },
        { value: '18-25', label: '18-25 Years' },
        { value: '26-35', label: '26-35 Years' },
        { value: '36-45', label: '36-45 Years' },
        { value: '45-above', label: '45-above Years' },
    ];

    useEffect(() => {
        callApi()
    }, [])

    const callApi = async () => {
        try {
            const result = await axios.get(`${apiUrl}users/countries`)

            if (result?.data?.success) {
                const formattedCountries = result?.data?.data.map((c) => ({
                    value: c.name,
                    label: c.name
                }));
                setCountries(formattedCountries);

                // const formattedCountriesCode = result?.data?.data.map((c) => ({
                //     value: c.code,
                //     label: `+${c.code}`
                // }));
                // setCountriesCode(formattedCountriesCode); // here 

                const result2 = await axios.get('https://restcountries.com/v3.1/all');
                console.log(result2)
                const formatted = result2.data.map((c) => {
                    const callingCode = c.idd?.root && c.idd?.suffixes?.length
                        ? `${c.idd.root}${c.idd.suffixes[0]}`
                        : '';

                    return {
                        value: callingCode,
                        label: c.name.common,
                        flag: c.flags?.png || '',
                        code: callingCode,
                    };
                }).filter(c => c.value); // Remove entries without calling code

                // Optional: sort alphabetically
                formatted.sort((a, b) => a.label.localeCompare(b.label));

                setCountriesCode(formatted);
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
        setErrors({ ...errors, [field]: '' }); // Clear error
    };

    const validateForm = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Enter a valid email address';
        }
        if (!formData.name) newErrors.name = 'Full name is required';
        if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
        if (!formData.countryCode) newErrors.phone = 'Country code is required';
        if (!formData.country) newErrors.country = 'Country is required';
        if (!formData.accountType) newErrors.accountType = 'Account type is required';
        if (!formData.ageRange) newErrors.ageRange = 'Age range is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const handleSubmit = async () => {
        if (!validateForm()) return;

        try {

            const payload = {
                email: formData.email,
                phone: `+${formData.countryCode.value}-${formData.phone}`,
                country: formData.country.value,
                ageRange: formData.ageRange.value,
                accountType: formData.accountType.value,
                name: formData.name
            }

            const response = await axios.post(`${apiUrl}users/waitlist`, payload);
            if (response.status == 201 && response.data.success) {

                toast.success(response.data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    //transition: Bounce,
                })
            } else {
                toast.error(response.data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    //transition: Bounce,
                })

            }

        } catch (error) {
            toast.error(error)

        }
    };

    const formatOptionLabel = ({ label, flag, code }) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src={flag} alt="flag" width="20" height="15" />
            {/* <span>{label}</span> */}
            <span>{code}</span>
        </div>
    );


    return (
        <><ToastContainer />
            <section className='main-page-wrapped'>

                <div className='bg-img'>
                    <div className='height-in-mobile'>
                    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className='main-heading bg-card'>
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
                    </div>
                    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className='logo'>
                        {/* <h1 className='framer-text' data-text-fill="true" >ARC</h1> */}
                        <img src='images/logo.png' />
                    </div>
                    <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                        <div className='bg-card form-box'>
                            <form>
                                <div className='input-box w-half'>
                                    <label>Please enter your Full Name</label>
                                    <input type='text' placeholder='Enter your full name' value={formData.name}
                                        onChange={(e) => handleChange('name', e.target.value)} />
                                    {errors.name && <div className="error">{errors.name}</div>}
                                </div>
                                <div className='input-box w-half'>
                                    <label>Please enter your Email</label>
                                    <input type='text' placeholder='Enter your Email' value={formData.email}
                                        onChange={(e) => handleChange('email', e.target.value)} />
                                    {errors.email && <div className="error">{errors.email}</div>}
                                </div>
                                {/* <div className='input-box w-half'>
                                    <label>Phone</label>
                                    <input type='text' placeholder='Enter your Phone' value={formData.phone}
                                        onChange={(e) => handleChange('phone', e.target.value)} />
                                    {errors.phone && <div className="error">{errors.phone}</div>}
                                </div> */}
                                <div className='input-box w-half'>
                                    <label>Phone Number</label>
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        <div className='country-dropdown d-flex'>
                                            <Select
                                                options={countriesCode}
                                                styles={countryStyle}
                                                placeholder="Code"
                                                value={formData.countryCode}
                                                onChange={(selected) => handleChange('countryCode', selected)}
                                                isSearchable={true}
                                                formatOptionLabel={formatOptionLabel}
                                            />
                                            <input
                                                type='text'
                                                placeholder='Enter your Phone'
                                                value={formData.phone}
                                                onChange={(e) => handleChange('phone', e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    {errors.phone && <div className="error">{errors.phone}</div>}
                                </div>

                                <div className='input-box w-half'>
                                    <label>Country</label>
                                    <Select
                                        options={countries}
                                        styles={customStyles}
                                        placeholder="Select Country"
                                        value={formData.country}
                                        onChange={(selected) => handleChange('country', selected)}
                                        isSearchable={true}
                                    />
                                    {errors.country && <div className="error">{errors.country}</div>}
                                </div>
                                <div className='input-box w-half'>
                                    <label>Preferred Account Size</label>
                                    <Select
                                        options={options}
                                        styles={customStyles}
                                        placeholder="Select account size"
                                        value={formData.accountType}
                                        onChange={(selected) => handleChange('accountType', selected)}
                                        isSearchable={false}
                                    />
                                    {errors.accountType && <div className="error">{errors.accountType}</div>}
                                </div>
                                <div className='input-box w-half'>
                                    <label>Age</label>
                                    <Select
                                        options={ageRange}
                                        styles={customStyles}
                                        placeholder="Select age range"
                                        value={formData.ageRange}
                                        onChange={(selected) => handleChange('ageRange', selected)}
                                        isSearchable={false}
                                    />
                                    {errors.ageRange && <div className="error">{errors.ageRange}</div>}
                                </div>
                                <div className='animated-button'>
                                    <button className="glow-on-hover" type="button" onClick={() => handleSubmit()}>JOIN WAITLIST</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Home