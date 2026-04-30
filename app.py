from flask import Flask, render_template, request, jsonify, redirect, url_for, flash
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime, timezone

app = Flask(__name__)
app.secret_key = "123456789"

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///contacts.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    message = db.Column(db.Text, nullable=False)
    date = db.Column(db.DateTime, default=datetime.now(timezone.utc))

@app.route('/')
def index():
    return render_template('index.html', page='about')

@app.route('/education')
def education():
    return render_template('education.html', page='edu')

@app.route('/projects')
def projects():
    return render_template('projects.html', page='proj')

@app.route('/reflection')
def reflection():
    return render_template('reflection.html', page='refl')

@app.route('/contact')
def contact():
    return render_template('contact.html', page='contact')

@app.route('/api/calculate-bmi', methods=['POST'])
def calculate_bmi():
    try:
        data = request.get_json()

        height = float(data.get('height')) / 100
        weight = float(data.get('weight'))

        bmi = round(weight / (height * height), 1)

        if bmi < 18.5:
            status = "Underweight - Needs nutritional supplements 🥗"
        elif bmi < 24.9:
            status = "Normal - Excellent! 🌟"
        elif bmi < 29.9:
            status = "Overweight - Let's exercise! 🏃‍♂️"
        else:
            status = "Obese - Medical advice needed 🏥"

        return jsonify({"bmi": bmi, "status": status})

    except:
        return jsonify({"error": "Invalid data"}), 400

@app.route('/submit-contact', methods=['POST'])
def submit_contact():
    name = request.form.get('name')
    email = request.form.get('email')
    message = request.form.get('message')

    if not name or not email or not message:
        flash("Missing fields!", "error")
        return redirect(url_for('contact'))

    new_contact = Contact(name=name, email=email, message=message)
    db.session.add(new_contact)
    db.session.commit()

    flash("Message sent successfully!", "success")
    return redirect(url_for('contact'))

if __name__ == '__main__':
    with app.app_context():
        db.create_all()

    app.run(debug=True)

    