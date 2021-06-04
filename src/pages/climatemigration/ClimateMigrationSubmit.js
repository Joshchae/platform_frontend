import React, { useState } from 'react'
import axios from 'axios'
import './ClimateMigration.css'
// import ClimateMigrationUseForm from '../../components/ClimateMigrationUseForm'

function ClimateMigrationSubmit({toggleSubmit}) {
// const {handleChange, handleSubmit, values, submitData} = ClimateMigrationUseForm()

    const [values, setValues] = useState({ region: 'Eastern Caribbean', country: '', locationName: '', title: '', story: '', image: '', email: '', nickname: ''});
    // const [errors, setErrors] = useState({});

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({ 
            ...values,
            [name]: value
        });
        console.log(values)
    };
    const postUrl = 'http://localhost:5000/posts';
    const handleSubmit = e => {
        e.preventDefault();
        axios.post(postUrl, {
            region: values.region,
            country: values.country,
            locationName: values.locationName,
            title: values.title,
            story: values.story,
            image: values.image,
            email: values.email,
            nickname: values.nickname
        })
        .then((res) => {
            console.log(res.data);
        })
    }

    // const submitData = async () => {
    //     try {
    //         const result = await fetch('http://localhost:5000/posts', {
    //             method: 'post',
    //             mdoe: 'no-cors',
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 region: '',
    //                 country: '',
    //                 locationName: '',
    //                 title: '',
    //                 story: '',
    //                 image: '',
    //                 email: '',
    //                 nickname: ''
    //             })
    //         })
    //         console.log(result)
    //     } catch(err) {
    //         console.log(err)
    //     }
    // };


    return (
        <div>
            <form onSubmit={(e)=> handleSubmit(e)}>
                <h2>Share your stories!</h2>
                {/* Region of the country, but need to find out ways to map items from database and POST user's selected option */}
                <div>
                    <label htmlFor="region">Choose the region of your countries</label>
                        <select id="region" name="region" value={values.region} onChange={handleChange} default=''>
                            <option value='Eastern Caribbean'>Eastern Caribbean</option>
                            <option value='South Pacific'>South Pacific</option>
                            <option value='West Pacific'>West Pacific</option>
                            <option value='West Africa'>West Africa</option>
                            <option value='East Africa'>East Africa</option>
                        </select>
                </div>
                <div>
                    <label htmlFor="country">Name of Country</label>
                    <input id="country" type="text" name="country" placeholder="Write down your country" value={values.country} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="locationName">Name of City / Village</label>
                    <input id="locationName" type="text" name="locationName" placeholder="Write down your city / village" value={values.locationName} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="title">Title</label>
                    <input id="title" type="text" name="title" placeholder="title" value={values.title} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="story">Story</label>
                    <input id="story" type="text" name="story" placeholder="Share your stories here!" value={values.story} onChange={handleChange} />
                </div>
                {/* Need to find out how pictures are uploaded as files or URL; using react library */}
                <div>
                    <label htmlFor="image">Image URL</label>
                    <input id="image" type="text" name="image" placeholder="Write down your picture URL" value={values.image} onChange={handleChange}/>                    
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" placeholder="Write down your email" value={values.email} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="nickname">Nickname</label>
                    <input id="nickname" type="text" name="nickname" placeholder="Write down your nickname" value={values.nickname} onChange={handleChange}/>
                </div>
                <button type="submit">Submit</button>
                {/* <button type="submit" onSubmit={handleSubmit} onClick={toggleSubmit}>Submit</button> */}
                {/* <button type="submit" onSubmit={handleSubmit} onClick={}>Submit Data</button> */}
            </form>
        </div>
    )
}

export default ClimateMigrationSubmit


/*
const handleSubmit=(e)=> {
    e.preventDefault();
    // const postUrl = 'http://localhost:5000/users';
    const postUrl = 'https://blooming-lowlands-37264.herokuapp.com';
    fetch(postUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: this.name,
            height: this.height,
            strength: this.strength,
            age: this.age,
            iq: this.iq,
            funnyness: this.funnyness
        })
    })
    .then(()=>{
        alert('Completed!');
    })
}
*/