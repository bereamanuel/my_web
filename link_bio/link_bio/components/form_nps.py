import reflex as rx
from link_bio.api.nps import nps,db_client
import link_bio.variables.variables as variables


myquerie = {"year":variables.YEAR}

def form_nps() -> rx.Component:
    return rx.vstack(
            nps(),
            rx.text(f"¡Durante {variables.YEAR} llevamos {len(list(db_client.responses.find(myquerie)))} respuestas!", 
                    align="center"),
            width = "100%"
    )