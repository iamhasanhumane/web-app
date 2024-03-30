export default({
    template : `<div>

    <div>
    <div style="text-align: left">
    <h1><em>Elai.</em></h1>
    </div>

    <div style="text-align: right">
      <b >Don't have an account yet?</b> &nbsp; &nbsp; &nbsp; 
      <button class="btn btn-primary" @click="sign_up">Sign up  > </button>
    </div>
    </div> 

    <div class="container">
    <div class="row justify-content-center">
     <div class="col-md-6">
      <div class="card mt-5">
        <div class="card-body">
          <!-- Login form content --> 
          <h2 class="text-center">Sign in to your account</h2>
          <br>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" v-model="cred.email" id="email" placeholder="Enter your Email"> 
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" v-model="cred.password" id="password" placeholder="Enter your password">
            </div>

            <div align="center">
            <button class = "btn btn-primary" @click="login">Login</button>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>   
    </div>`, 
    data(){
        return {
            cred : {
                email: null,
                password : null
            }
        }
    },
    methods: {
        sign_up(){
            this.$router.push('/') ; 
        } , 
        async login(){
            const res = await fetch('/user-login',{
                method: 'POST',
                headers: {
                    'Content-Type':'application/json',
                },
                body: JSON.stringify(this.cred),   // sending the credentials as json object to the backend
            })
            const data = await res.json() ;  // res is getting from the backend as json object
            const name = data.name; 
            if (res.ok){      
                this.$router.push({path: `/dashboard`}); 
                localStorage.setItem("name", name);
                localStorage.setItem("email", data.email); 

            }  
            else{
                this.error = data.message;
            }
        },
    }
})