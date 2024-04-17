from flask_wtf import FlaskForm
from wtforms import StringField,EmailField,SubmitField,ValidationError
from wtforms.validators import DataRequired,Email,Length

def solo_numeros(form, field):
    if not field.data.isdigit():
        raise ValidationError('Debe contener solo números.')

class Login(FlaskForm):
    id = StringField("Número de identificación",
        validators=[
            DataRequired(message="El número de documento es obligatorio"),
            Length(min=10,max=10,message="Debe tener 10 caracteres numéricos"),
            solo_numeros
        ],
        render_kw={
            "class": "form-control",
            "placeholder": "Inrese su ID" }
    )
    email = EmailField("Correo electrónico",
        validators=[
            DataRequired(message="El correo electrónico es obligatorio"),
            Email(message="Ingrese una dirección de correo válida")],
        render_kw={
            "class": "form-control",
            "placeholder": "Inrese su correo" }
    )
    submit = SubmitField("Ingresar al Sistema",render_kw={"class": "btn btn-primary"})