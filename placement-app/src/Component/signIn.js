import '../Styles/signin.css'
const SignIn=()=>{
    return(
        <form action="#" class="sign-in-form">
        <h2 class="title">Sign in</h2>
        <div class="custom-select">
            <select>
              <option value="">Select Designation</option>
              <option value="">Admin</option>
              <option value="">Student</option>
            </select>
            <span class="custom-arrow"></span>
          </div>
        <div class="input-field">
          <i class="fas fa-user"></i>
          <input type="text" placeholder="Username/Enrollment Number" />
        </div>
        <div class="input-field">
          <i class="fas fa-lock"></i>
          <input type="password" placeholder="Password" />
        </div>  
        <input type="submit" value="Login" class="btn solid" />
        <p class="social-text">Or Sign in with social platforms</p>
        <div class="social-media">
          <a href="#" class="social-icon">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="social-icon">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="social-icon">
            <i class="fab fa-google"></i>
          </a>
          <a href="#" class="social-icon">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </form>
    )
}
export default SignIn