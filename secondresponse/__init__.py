
""" Module summary:
Initialize the Flask application.
"""

from flask import Flask

from .views.index import index
# from .apis import apis

############################################################################


# Initialize flask application:
application = Flask(__name__)

APPLICATION_NAME = "Second Response"

# # application.config["UPLOAD_FOLDER_PROFILE"] = "./secondresponse/static/userImages/profile"
# # application.config["UPLOAD_FOLDER_ITEM"] = "./secondresponse/static/userImages/item"
# # application.config["ALLOWED_EXTENSIONS"] = set(["pdf", "png", "jpg", "jpeg", "gif"])

application.register_blueprint(index)
# application.register_blueprint(apis)
