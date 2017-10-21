
""" Module summary:
"""

from secondresponse import application

############################################################################


if __name__ == "__main__":
  application.secret_key = "super_secret_key"
  application.debug = True
  # application.run(host = "0.0.0.0", port = 5000)
  application.run()
