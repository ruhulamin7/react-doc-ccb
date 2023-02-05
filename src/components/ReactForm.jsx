import React from 'react';

class ReactForm extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '', lastName: '', message: '', country: '', gender: '', hobbies: [],
    };
  }

  render() {
    const {
      firstName, lastName, message, country, gender, hobbies,
    } = this.state;

    // input change handler
    const changeHandler = (e) => {
      const {
        value, name, type, checked,
      } = e.target;
      this.setState({ [name]: value });
      if (type === 'checkbox') {
        const updatedHobbies = [...hobbies];

        if (checked) {
          updatedHobbies.push(value);
        } else {
          const index = updatedHobbies.indexOf(value);
          updatedHobbies.splice(index, 1);
        }
        this.setState({ [name]: updatedHobbies });
      }
    };

    // submit form
    const submitForm = (e) => {
      e.preventDefault();
      console.log(this.state);
    };
    return (
      <div>
        <form onSubmit={submitForm}>
          <label htmlFor="firstName">
            First Name:
            <br />
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={changeHandler}
              placeholder="Enter first name"
              id="firstName"
            />
          </label>
          <br />
          <br />
          <label htmlFor="lastName">
            Last Name:
            <br />
            <input
              onChange={changeHandler}
              name="lastName"
              value={lastName}
              type="text"
              placeholder="Enter last name"
            />
          </label>
          <br />
          <br />
          <label htmlFor="message" name="message">
            Enter Message:
            <br />
            <textarea
              onChange={changeHandler}
              type="textarea"
              name="message"
              id="message"
              value={message}
              placeholder="Enter your message"
              rows={7}
              cols={30}
            />
          </label>
          <br />
          <br />
          <label htmlFor="country">
            Country:
            <select onChange={changeHandler} value={country} name="country" id="country">
              <option disabled value="">--Select--</option>
              <option value="India">India</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Australia">Australia</option>
            </select>
          </label>
          <br />
          <br />
          <label htmlFor="male">
            <input name="gender" type="radio" value="male" id="male" onChange={changeHandler} checked={gender === 'male'} />
            Male
          </label>
          <label htmlFor="female">
            <input name="gender" type="radio" value="female" id="female" onChange={changeHandler} />
            {/* checked={gender === 'female'} */}
            Female
          </label>
          <label htmlFor="other">
            <input name="gender" type="radio" value="other" id="other" onChange={changeHandler} checked={gender === 'other'} />
            Other
          </label>
          <br />
          <br />
          <p>Hobbies</p>
          <label htmlFor="coding">
            <input type="checkbox" value="coding" name="hobbies" id="coding" onChange={changeHandler} checked={hobbies.includes('coding')} />
            Coding
          </label>
          <label htmlFor="playing">
            <input type="checkbox" value="playing" name="hobbies" id="playing" onChange={changeHandler} checked={hobbies.includes('playing')} />
            Playing
          </label>
          <label htmlFor="swimming">
            <input type="checkbox" value="swimming" name="hobbies" id="swimming" onChange={changeHandler} checked={hobbies.includes('swimming')} />
            Swimming
          </label>
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default ReactForm;
