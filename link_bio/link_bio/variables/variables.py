import datetime as dt
import os

YEAR = dt.datetime.now().year
MONTH = dt.datetime.now().month

NICK_NAME = "BereaManuel"

URL = {
    "LinkedIn" : "https://www.linkedin.com/in/manuel-berea/",
    "Github" : "https://github.com/bereamanuel",
    "Kaggle": "https://www.kaggle.com/manuelbereaarellano",
    "email" :"mailto:mbaberearellano@gmail.com"
}

MONGO_URI = os.environ["MONGODBURI"]