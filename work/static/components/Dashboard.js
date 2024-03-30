export default({
    template: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bootstrap Sidebar</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    </head>
    <body>
        <div class="wrapper">
            <aside id="sidebar">
                <div class="d-flex">
                    <button id="toggle-btn" type="button" @click="hide">  
                        <i class="lni lni-grid-alt"></i>
                    </button>
                    <div class="sidebar-logo">
                        <a href="#" style="text-decoration: none;"><h3><em>elai.</em></h3></a> 
                    </div>
                </div>
                <ul class="sidebar-nav">
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link" style="text-decoration: none;">
                          <i class="lni lni-home"></i>
                            <span>Home</span>
                        </a> 
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link" style="text-decoration: none;">
                            <i class="lni lni-video"></i>
                            <span>Videos</span> 
                        </a> 
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link" style="text-decoration: none;">
                            <i class="lni lni-gallery"></i>
                            <span>My templates</span>
                        </a> 
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link" style="text-decoration: none;">
                            <i class="bi bi-person-add"></i>
                            <span>Create avatar</span>
                        </a> 
                    </li> 
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link" style="text-decoration: none;">
                            <i class="bi bi-people-fill"></i>
                            <span>Avatars library</span>
                        </a> 
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link" style="text-decoration: none;">
                            <i class="bi bi-trash"></i> 
                            <span>Deleted videos</span>
                        </a> 
                    </li>
                    <li class="sidebar-item" v-if="view"> 
                        <div class="square-box">
                        <b>0m/1m</b>
                        <br>
                        <p>Upgrade to the paid plan. Cancel at any time </p>
                        <div align="center">
                        <button class="btn btn-primary" align="center">Upgrade</button>
                        </div>
                        </div>
                    </li> <br><br><br><br><br><br><br>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link" style="text-decoration: none;">
                            <i class="bi bi-hand-thumbs-up"></i> 
                            <span>Support</span>
                        </a> 
                    </li> 
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link" style="text-decoration: none;">
                            <i class="bi bi-chat-dots-fill"></i> 
                            <span>Discuss</span>
                        </a> 
                    </li> 
                </ul>
            </aside> 
            <div class="main p-3" style = "background-color: rgb(235, 235, 235);"> 
            <div style="display: flex;">
               <strong> 
               <a href="#" style="display: flex; color: black; align-items: center; text-decoration: none; margin-top: 10px; margin-left: 35px;">  
                 <i class="bi bi-house" style="font-size: 1.5rem;"></i>
                 <span style="margin-left: 3px; margin-top: 8px">Home</span>
               </a>
               </strong>
               <button style="margin-left: auto;padding: 10px ; border-radius: 10px;" class="btn btn-primary">
               <i class="bi bi-play-btn" style="font-size: 1rem; margin-right:10px;"></i> 
               Create video
               </button>
               &nbsp; &nbsp; 
               <div class="dropdown-center">
                <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <b>{{name}}</b>
                </button>
                <ul class="dropdown-menu">
                    <h6 style="margin-left: 15px;">{{name}}</h6> 
                    <div style="margin-left: 15px; margin-bottom: 20px;">{{email}}</div>  
                    <li style="margin-bottom: 5px;"><a class="dropdown-item" href="#"><i class="bi bi-person-fill" style="margin-right: 10px;"></i>My Profile</a></li>
                    <li style="margin-bottom: 5px;"><a class="dropdown-item" href="#"><i class="bi bi-person-workspace" style="margin-right: 10px;"></i>Workspace settings</a></li>
                    <li style="margin-bottom: 5px;"><a class="dropdown-item" href="#"><i class="bi bi-gear" style="margin-right: 10px;"></i>Api Settings</a></li>
                    <li style="margin-bottom: 5px;"><a class="dropdown-item disabled" aria-disabled="true" href="#"><i class="bi bi-arrow-left-right" style="margin-right: 10px;"></i>Single Sign-on</a></li> 
                    <li style="margin-bottom: 5px;"><a class="dropdown-item" role="button" @click="log_out"><i class="bi bi-arrow-right-circle" style="margin-right: 10px;"></i>Log Out</a></li>
                </ul>
               </div> 
            </div>
            <br><br>
            <h3 align="center"><b >How would you like to start video </b></h3>
            <h3 align="center"><b >creation today?</b></h3>
            <br><br>
            <div class="row">
             <div class="col-sm-3 mb-3 mb-sm-0">
               <div class="card border-light">
                <div class="card-body">
                    <h5 class="card-title" style="color: gray; margin-left: 30px;">From template</h5><br>
                    <div class="icon-container" aria-hidden="true">
                     <i class="bi bi-grid" style="font-size: 50px; margin-left: 50px;"></i>
                     <span class="icon-text" style="color: gray;">Create amazing videos from template</span>
                    </div> 
                </div>
               </div>
             </div>
             <div class="col-sm-3">
              <div class="card border-light">
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                     New
               <span class="visually-hidden">unread messages</span>
               </span>
                <div class="card-body">
                    <h5 class="card-title" style="color: gray; margin-left: 30px">AI storyboard</h5><br>
                    <div class="icon-container" aria-hidden="true">
                     <i class="bi bi-clipboard-fill" style="font-size: 50px; margin-left: 50px;"></i>
                     <span class="icon-text" style="color: gray;">Type a topic and get a video in minutes</span>
                    </div> 
                </div>
               </div>
             </div>
             <div class="col-sm-3">
              <div class="card border-light">
                <div class="card-body">
                    <h5 class="card-title" style="color: gray; margin-left: 10px">Start with an avatar</h5><br>
                    <div class="icon-container" aria-hidden="true">
                     <i class="bi bi-people" style="font-size: 50px; margin-left: 50px;"></i>
                     <span class="icon-text" style="color: gray;">Start with an avatar</span>
                    </div> 
                </div>
               </div>
             </div>
             <div class="col-sm-3">
              <div class="card border-light">
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill" style="background-color: purple;">
                    Beta
                <span class="visually-hidden">unread messages</span>
                </span>
                </span>
                <div class="card-body">
                    <h5 class="card-title" style="color: gray; margin-left: 30px">From PPTX/PDF</h5><br>
                    <div class="icon-container" aria-hidden="true">
                     <i class="bi bi-file-earmark-arrow-up" style="font-size: 50px; margin-left: 50px;"></i>
                     <span class="icon-text" style="color: gray;">Upload PPTX/PDF file and turn it into a video</span> 
                    </div>
                </div>
               </div>
             </div> 
             <div class="col-sm-4" style="margin-top: 20px;">
              <div class="card border-light">
                <div class="card-body">
                    <h5 class="card-title" align="center" >Blank video</h5>
                    <img src="static/components/default_create_avatar.4aa9a37f.png" style="width: 150px; height: 150px; margin-left: 60px;"></img>
                    <a href="#" style="text-decoration : none; color: blue; font-size: 25px; margin-left: 90px;" >Create</a>
                </div>
               </div>
             </div>
             <div class="col-sm-4" style="margin-top: 20px;">
              <div class="card border-light">
                <div class="card-body">
                    <h5 class="card-title">Last videos</h5>
                    <br>
                    <div class="rectangle"> 
                        <div style="margin-top: 25px;">
                        <i class="bi bi-person-rolodex" style="font-size: 30px; color: black; "></i>
                        </div> 
                    </div> 
                    <h6 style="margin-left: 15px;">Video Name</h6>  
                    <br>
                    <div align="right">
                    <a href="#" style="text-decoration: none; font-size: 20px;">View all</a>
                    </div>              
                </div>
               </div>
             </div>
             <div class="col-sm-4" style="margin-top: 20px;">
              <div class="card border-light">
                <div class="card-body">
                    <h5 class="card-title">Elia tutorials</h5>
                    <div class="rectangle-2">  
                        <div style="">
                        <img src="static/components/sddefault.jpg" style="width: 140px; height: 90px;"></img>
                        <h5>Folders and Tags</h5>
                        </div> 
                    </div>
                    <div class="rectangle-2">  
                        <div style="">
                        <img src="static/components/sddefault (1).jpg" style="width: 140px; height: 90px;"></img>
                        </div> 
                    </div>
                    <div class="rectangle-2">  
                        <div style="">
                        <img src="static/components/sddefault (2).jpg" style="width: 140px; height: 90px;"></img>
                        </div> 
                    </div>
                    <div class="rectangle-2">  
                        <div style="">
                        <img src="static/components/sddefault (3).jpg" style="width: 140px; height: 90px;"></img>
                        </div> 
                    </div> 
                </div>
               </div>
             </div>

            </div>
            

            
            .</div>
            <br><br>
            <br>
            <br>
            <br>
              
        </div>



    </body>
    </html>` ,
    beforeMount(){
        alert('Refresh the dashboard once after the page is loaded and then click the toggle button on left')
    },
    mounted(){
        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.querySelector('#toggle-btn');
            hamburger.addEventListener('click', function() {
                document.querySelector('#sidebar').classList.toggle('expand');  
            });
        }); 
    },
    data(){ 
        return {
            name : localStorage.getItem('name'),
            email: localStorage.getItem('email'),
            view: false   
        }
    },
    methods : {
        log_out(){
            alert('You are Logging Out!');
            localStorage.removeItem('name');
            localStorage.removeItem('email');
            this.$router.push('/') 
        },
        hide(){
            this.view = !this.view; 
        }
    }
    
})   