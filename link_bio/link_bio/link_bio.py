import reflex as rx

from link_bio.components.navbar import navbar
from link_bio.components.footer import footer
from link_bio.api.nps import nps,db_client

from link_bio.views.header.header import header
from link_bio.views.links.links import links

from link_bio.api.schema.response import responses_schema

import datetime as dt
class State(rx.State):
    pass


def index() -> rx.Component:
    return rx.box(
        navbar(),
        rx.vstack(
            header(),
            links()
        ),
        nps(),
        rx.text(f"¡Durante {dt.datetime.now().year} llevamos {len(list(db_client.responses.find({"year":dt.datetime.now().year })))} respuestas!"),
        footer()
    )


app = rx.App()
app.add_page(index)

app.compile()