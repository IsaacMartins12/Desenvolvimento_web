from flask import Flask,render_template,redirect,url_for,request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__,template_folder='templates')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///estudantes.sqlite3'

db = SQLAlchemy(app) 

class Estudantes(db.Model) :
  id = db.Column('id',db.Integer, primary_key=True, autoincrement=True)
  nome = db.Column(db.String(150))
  idade = db.Column(db.Integer)

  def __init__ (self ,nome,idade) :
    self.nome = nome 
    self.idade = idade


@app.route('/')

def index() :
  estudantes = Estudantes.query.all()
  return render_template('index.html',Estudantes=estudantes)

@app.route('/add',methods=['GET','POST'])

def add() :

 if request.method == 'POST' :
    estudante = Estudantes(request.form['nome'], request.form['idade'])
    db.session.add(estudante)
    db.session.commit()
    return redirect(url_for('index'))

 return render_template('add.html') 

@app.route('/edit/<int:id>',methods=['GET','POST'])

def edit(id) :
 estudantes = Estudantes.query.get(id)
 if request.method == 'POST' :
      estudantes.nome = request.form['nome']
      estudantes.idade = request.form['idade']
      db.session.commit()
      return  redirect(url_for('index'))
 return render_template('edit.html',estudante=estudantes) 

@app.route('/delete/<int:id>') 

def delete(id) :
  estudantes = Estudantes.query.get(id)
  db.session.delete(estudantes)
  db.session.commit()
  return redirect(url_for('index'))

if __name__ == '__main__' :
  db.create_all()
  app.run(debug=True)