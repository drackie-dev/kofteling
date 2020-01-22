class Config():
    pass

class DebugConfig(Config):
    TESTING = True
    FLASK_DEBUG = True
    SECRET_KEY = 'geheim'
    SQLALCHEMY_DATABASE_URI = "mssql+pyodbc:///kofteling:kofteling@SQL_SERVER"
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # @127.0.0.1\KOFTELING?driver=ODBC+Driver+17+for+SQL+Server