from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import config

db = SQLAlchemy()
app = Flask(__name__, instance_relative_config=False)
app.config.from_object("config.DebugConfig")
db.init_app(app)
    
with app.app_context():
    import routes
    db.create_all()

if __name__ == "__main__":
    app.run(host='127.0.0.1', debug=True)
    