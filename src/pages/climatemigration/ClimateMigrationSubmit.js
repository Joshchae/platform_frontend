import React from 'react'
import './ClimateMigration.css'
import ClimateMigrationUseForm from '../../components/ClimateMigrationUseForm'

function ClimateMigrationSubmit() {
const {handleChange, handleSubmit, values} = ClimateMigrationUseForm()

    return (
        <div>
            <form method="POST" onSubmit={handleSubmit}>
                <h2>Share your stories!</h2>
                {/* Region of the country, but need to find out ways to map items from database and POST user's selected option */}
                <div>
                    <label htmlFor="region">Choose the region of your countries</label>
                        <select id="region" name="region" value={values.region} onSelect={handleChange} >
                            <option value="Eastern Caribbean">Eastern Caribbean</option>
                            <option value="South Pacific">South Pacific</option>
                            <option value="West Pacific">West Pacific</option>
                            <option value="West Africa">West Africa</option>
                            <option value="East Africa">East Africa</option>
                        </select>
                </div>

                <div>
                    <label htmlFor="country">Name of Country</label>
                    <input id="country" type="text" name="country" placeholder="Write down your country" value={values.country} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="location">Name of City / Village</label>
                    <input id="location" type="text" name="location" placeholder="Write down your city / village" value={values.location} onChange={handleChange} />
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
                    <label htmlFor="picture">Picture</label>
                    <input id="picture" type="text" name="picture" placeholder="Write down your picture URL" value={values.picture} onChange={handleChange}/>                    
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" placeholder="Write down your email" value={values.email} onChange={handleChange}/>
                </div>

                <div>
                    <label htmlFor="nickname">Nickname</label>
                    <input id="nickname" type="text" name="nickname" placeholder="Write down your nickname" value={values.nickname} onChange={handleChange}/>
                </div>
                <button type="submit" onSubmit={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default ClimateMigrationSubmit
