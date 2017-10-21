
""" Module summary:
Classes:
  User - Class for table containing user information.
  Farm - Class for table containing farm information.
  CatalogItem - Class for table containing catalog item information.
  Event - Class for table containing event information.
"""

from sqlalchemy import Column, ForeignKey, Integer, String, Float
from sqlalchemy.dialects.sqlite import TEXT
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine
# from sqlalchemy_imageattach.entity import Image, image_attachment

############################################################################


Base = declarative_base()


class User(Base):
  """Class for table containing user information."""
  
  __tablename__ = "user"

  id = Column(Integer, primary_key=True)
  name = Column(String(250), nullable=False)
  email = Column(String(250), nullable=False)
  contact = Column(TEXT)
  
  @property
  def serialize(self):
    """Return object data in easily serializeable format."""
    return {
      "id": self.id,
      "name": self.name,
      "email": self.email,
      "contact": self.contact
    }


class Need(Base):
  """Class for table containing need information."""
  
  __tablename__ = "need"
 
  id = Column(Integer, primary_key=True)
  description = Column(TEXT)
  user_id = Column(Integer, ForeignKey("user.id"))
  user_in_need = Column(Integer, ForeignKey("user.id"))
  responder = Column(Integer, ForeignKey("user.id"))
  location = Column(String(250))
  latitude = Float(Precision=64)
  longitude = Float(Precision=64)
  
  @property
  def serialize(self):
    """ Return object data in easily serializeable format."""
    return {
      "id": self.id,
      "user": self.user.name,
      "location": self.location,
      "description": self.description,
      "latitude": self.latitude,
      "longitude": self.longitude
    }


if __name__ == "__main__":
  engine = create_engine("sqlite:///sr.db")
  Base.metadata.create_all(engine)
