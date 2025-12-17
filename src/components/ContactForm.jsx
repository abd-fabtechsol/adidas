import { useState } from 'react';
import dropdownArrow from '../assets/dropdown-arrow.png';
import patternBg from '../assets/pattern-bg.png';
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: 'USA',
    state: 'USA',
    gender: 'Male',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
 const footerStyle = {
      backgroundImage: `url(${patternBg})`,
    
      backgroundRepeat: 'repeat',
      backgroundSize: 'auto',
      backgroundBlendMode: 'multiply',
    };
  return (
    <div style={{backgroundColor:"#1E5E3E"}}>
    <div style={footerStyle}>
    <section className="contact-section">
      <h2>GET IN TOUCH WITH US</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">NAME</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="enter name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">EMAIL</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="enter email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="country">COUNTRY</label>
            <div className="select-wrapper">
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
              >
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="UK">UK</option>
              </select>
              <img src={dropdownArrow} alt="" className="dropdown-icon" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="state">STATE</label>
            <div className="select-wrapper">
              <select
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
              >
                <option value="USA">USA</option>
                <option value="California">California</option>
                <option value="New York">New York</option>
              </select>
              <img src={dropdownArrow} alt="" className="dropdown-icon" />
            </div>
          </div>
        </div>

        <div className="form-group gender-group">
          <label>GENDER</label>
          <div className="radio-options">
            <label className="radio-label">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === 'Male'}
                onChange={handleChange}
              />
              Male
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === 'Female'}
                onChange={handleChange}
              />
              Female
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="gender"
                value="Other"
                checked={formData.gender === 'Other'}
                onChange={handleChange}
              />
              Other
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">COUNTRY</label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">SUBMIT</button>
      </form>
    </section>
    </div>
    </div>
  );
}

export default ContactForm;
