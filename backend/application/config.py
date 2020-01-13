class Config():
    pass

class DebugConfig(Config):
    TESTING = True
    FLASK_DEBUG = True
    SECRET_KEY = 'geheim'
    SQLALCHEMY_DATABASE_URI = "sqlite:///:memory:"
    SQLALCHEMY_TRACK_MODIFICATIONS = False