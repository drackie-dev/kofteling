class Config:

    # General
    TESTING = True
    FLASK_DEBUG = True
    SECRET_KEY = 'very-secret'

    # Database
    SQLALCHEMY_DATABASE_URI = "sqlite:///:memory:"
    SQLALCHEMY_TRACK_MODIFICATIONS = False