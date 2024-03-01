import reflex as rx
import os
config = rx.Config(
    app_name="link_bio",
    db_url= os.environ["MONGO_URI"]
)