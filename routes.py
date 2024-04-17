from flask import render_template,url_for,flash,redirect,request
from forms import Login

def init_app(app):
    
    @app.route("/")
    @app.route("/inicio")
    def inicio():
        titulo = "Bienvenido" 
        return render_template('base.html',titulo=titulo)
    
    @app.route("/login", methods=['GET', 'POST'])
    def login():
        form = Login()

        if form.validate_on_submit():
            user_id = form.id.data
            user_email = form.email.data

            if user_id == '0123456789' and user_email == 'diego.angc@hotmail.com':
                return redirect(url_for('dashboard'))
            else:
                flash('Identificación o correo inválido', 'danner')
                return redirect(url_for('login'))
            
        return render_template('base.html',form=form)
    
