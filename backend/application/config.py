class Config():
    pass

postgress = True
mssql = False

if postgress:
    class DebugConfig(Config):
        TESTING = True
        FLASK_DEBUG = True
        SECRET_KEY = 'geheim'
        SQLALCHEMY_DATABASE_URI = "postgresql+psycopg2://kofteling:kofteling@localhost:5432/postgres"
        SQLALCHEMY_TRACK_MODIFICATIONS = False

elif mssql:
    class DebugConfig(Config):
        TESTING = True
        FLASK_DEBUG = True
        SECRET_KEY = 'geheim'
        params = urllib.parse.quote_plus("DRIVER={SQL Server Native Client 11.0};SERVER=DESKTOP-N0GN0AT;DATABASE=KOFTELING;UID=kofteling;PWD=kofteling")
        SQLALCHEMY_DATABASE_URI = "mssql+pyodbc:///?odbc_connect=%s" % params
        #SQLALCHEMY_DATABASE_URI = "mssql+pyodbc:///kofteling:kofteling@SQL_SERVER"
        SQLALCHEMY_TRACK_MODIFICATIONS = False

        # @127.0.0.1\KOFTELING?driver=ODBC+Driver+17+for+SQL+Server

