from pydantic import BaseModel
from typing import Optional

class Response(BaseModel):
    id: Optional[str]
    email: str
    reponse: int