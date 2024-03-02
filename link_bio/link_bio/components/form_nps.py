import reflex as rx
from link_bio.api.nps import nps,db_client
import datetime as dt

def form_nps() -> rx.Component:
    return rx.center(
            nps(),
            rx.text(f"¡Durante {dt.datetime.now().year} llevamos {len(list(db_client.responses.find({"year":dt.datetime.now().year })))} respuestas!", align="center"),
            width = "100%"
    )