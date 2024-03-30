from flask import Flask , request , render_template , redirect , jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

 

app.config['SQLALCHEMY_DATABASE_URI']="sqlite:///database.sqlite3"

db = SQLAlchemy(app)  



class Users(db.Model):
    id = db.Column(db.Integer,primary_key = True)
    name = db.Column(db.String(150))
    email = db.Column(db.String(150),unique = True , nullable = False)  
    password = db.Column(db.String(150), nullable = False)
    purpose  = db.Column(db.String(20) , nullable = False)  


@app.route('/')
def signup_page():
    return render_template('index.html')  

@app.route('/user-signup', methods = ["POST"])   
def user_signup():
    data = request.get_json()
    name = data.get('name')  
    email = data.get('email')
    password = data.get('password') 
    purpose = data.get('purpose')   

    user = Users.query.filter_by(name = name , email = email).first()
    if user:
        return jsonify({"message": "User Already exisits."}) , 409
    
    user = Users(name = name , email = email , password = password , purpose = purpose)
    db.session.add(user)
    db.session.commit()
    return jsonify({"message": "Registered-Successfully"}), 200 


@app.route('/user-login' , methods = ["POST"])
def user_login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    user = Users.query.filter_by(email = email).first()
    if not user:
        return jsonify({"message": "User Not Found"}), 404
    
    if user.password == password:
        return jsonify({"message" : "Login Successful" , "name" : user.name , "email": user.email}) , 200 
    
    else:
        return jsonify({"message": "Wrong Password or Email"}) , 400  










if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)  






