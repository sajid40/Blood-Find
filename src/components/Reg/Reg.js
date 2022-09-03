import React from 'react';

const reg = () => {
    return (
        <div>
            <div class="container">
    <div class="title">Registration</div>
    <div class="content">
      <form action="">
        <div class="user-details">
          <div class="input-box">
            <span class="details">Full Name</span>
            <input type="text" placeholder="Enter your name" required/>
          </div>
          <div class="input-box">
            <span class="details">Your Birth Date</span>
            <input type="date" placeholder="Enter your Birth date" required/>
          </div>
          <div class="input-box">
            <span class="details">Email</span>
            <input type="text" placeholder="Enter your email" required/>
          </div>
          <div class="input-box">
            <span class="details">Phone Number</span>
            <input type="text" placeholder="Enter your number" required/>
          </div>
          <div class="input-box">
            <span class="details">Present Address</span>
            <input type="text" placeholder="Enter your Present Address" required/>
          </div>
          <div class="input-box">
            <span class="details">Parmanent Address</span>
            <input type="text" placeholder="Enter your Parmanent Address" required/>
          </div>
          
        </div>

        <div class="bloodgroop">
          <b><p class="text1">Select your Blood Group</p></b>
           
           <div class="groop">
          <input type="radio" name="blood" id="A+"/>
          <label for="blood">A+</label>
          <input type="radio" name="blood" id="B+"/>
          <label for="blood">B+</label>
          <input type="radio" name="blood" id="O+"/>
          <label for="blood">O+</label>
          <input type="radio" name="blood" id="AB+"/>
          <label for="blood">AB+</label><br/>
          <input type="radio" name="blood" id="A-"/>
          <label for="blood">A-</label>
          <input type="radio" name="blood" id="B-"/>
          <label for="blood">B-</label>
          <input type="radio" name="blood" id="O-"/>
          <label for="blood">O-</label>
          <input type="radio" name="blood" id="AB-"/>
          <label for="blood">AB-</label></div>
          


        </div>


        

        <div> 
          <div class="category"></div>
        </div>
        <div class="button">
          <input type="submit" value="Register"/>
        </div>
      </form>
    </div>
  </div>
        </div>
    );
};

export default reg;