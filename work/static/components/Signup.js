export default({
    template : `<div>

    <div>
    <div style="text-align: left">
    <h1><em>Elai.</em></h1>
    </div>

    <div style="text-align: right">
      <b >Already have an account?</b> &nbsp; &nbsp; &nbsp;
      <button class="btn btn-primary" @click="login">Sign in  > </button>
    </div>
    </div>

    <br>
    <br>


  <div class="container border border-secondary p-4" style="border-radius : 20px;"> 
    <div class="row">
        <div style="background-color:Black;" class="col-md-5 mb-4">
        <h1 style="color: White;"> 
        Leading AI Video Generation Tool for Corporate Learning.
        </h1> 
        <br><br>
        <em>
        <h5 style="color: White;">“Elai has helped us streamline video production via an easy to use platform and 
        great customer service”.</h5>
        </em>

        <h3 style="color: White;">Pagero Team</h3> 
        <img src="static/components/pagero.png" alt="Pagero" width="150" height="30"> 
        <br><br>
        
        <img src="static/components/Americas.png" alt="Americas" width="76">
        <img src="static/components/EMEA.png" alt="EMEA" width="76">
        <img src="static/components/winter.png" alt="winter">
        <img src="static/components/sm.png" alt="sm" width="76">
        <img src="static/components/hp.png" alt="hp" >
        </div>


        <div class="col-md-5 mb-4">  
           <br><br>
           <h3 align="center"> <b>&nbsp; &nbsp; &nbsp;&nbsp; Create your account </b> </h3> 

           <br>

           <div class="mb-3">
             <label for="name" class="form-label" >Name</label>
             <i class="bi bi-person"></i>  
             <input type="name" class="form-control" id="name" placeholder="First and last name" v-model="cred.name">
           </div>

           <br>
           <div class="mb-3">
             <label for="exampleFormControlInput1" class="form-label" >Email address</label>
             <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="you@company.com" v-model="cred.email"> 
           </div>

           <br>
           <label for="inputPassword5" class="form-label" >Password</label>
           <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" v-model="cred.password" placeholder="Create a strong password">
           <div id="passwordHelpBlock" class="form-text">
           Password should be at least 8 characters long, must contain a lowercase letter, an uppercase letter, and a number.
           </div>

           <br>
           <label for="purpose" class="form-label" >What will you use videos for?</label>
           <div class="dropdown">
           <select name="role" id="purpose" v-model="cred.purpose" class="form-control" style="width:500px;" required>  
             <option value="Personal Use"> Personal Use</option> 
             <option value="Work"> Work </option> 
             <option value="Education"> Education </option>  
           </select>
           </div> 
           
           <br>

           <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
            Please accept our Terms & Conditions and Privacy Policy
            </label> 
           </div>

           <br><br>
           <div align="center">
            <button class="btn btn-primary" @click="register_user">Create account  > </button>
           </div>

        </div>
    </div>
  </div> 
    
    </div>`, 
  
    data(){
      return {
        cred : {
          name: null,
          email: null,
          password: null,
          purpose: null
        } ,
        error : null, 

      }
    }, 
    methods: {
      toggle(){
         alert(this.cred.email);
      },
      login(){
        this.$router.push('/login'); 

      },
      async register_user(){
          const res = await fetch('/user-signup',{
              method: 'POST',
              headers: {
                  'Content-Type':'application/json',
              },
              body: JSON.stringify(this.cred),   // sending the credentials as json object to the backend
          })
          const data = await res.json() ;  // res is getting from the backend as json object
          if (res.ok){ 
              console.log(data.message);   
              alert(data.message);
              this.$router.push({path: '/login'});    
          }
          else{
              this.error = data.message;
          }
  },
  },

}) 