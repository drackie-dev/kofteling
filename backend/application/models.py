# from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from app import db

meta = MetaData(schema='public')


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    public_id = db.Column(db.String(50), unique=True)
    name = db.Column(db.String(50))
    password = db.Column(db.String(80))
    admin = db.Column(db.Boolean)
    __table_args__ = {'schema': 'public'}
