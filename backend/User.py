from bson import ObjectId

class User:
    def __init__(self, name, username, email, password, _id=None):
        self._id = str(_id) if _id else None
        self.name = name
        self.username = username
        self.email = email
        self.password = password

    def setId(self, _id):
        self._id = _id

    def getId(self):
        return self._id

    def to_dict(self):
        doc = {
            "name": self.name,
            "username": self.username,
            "email": self.email,
            "password": self.password
        }
        if self._id:
            doc["_id"] = ObjectId(self._id)
        return doc

    @classmethod
    def from_dict(cls, doc):
        return cls(
            name=doc["name"],
            username=["username"],
            email=["email"],
            password=["password"],
            _id=doc.get("_id")
        )

    @property
    def id(self):
        return self._id