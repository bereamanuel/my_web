import reflex as rx

from link_bio.components.navbar import navbar
from link_bio.components.footer import footer
from link_bio.components.form_nps import form_nps

from link_bio.views.header.header import header

import link_bio.styles.styles as styles

class State(rx.State):
    @rx.var
    def current_url(self) -> str:
        return self.router.page.full_raw_path
    

@rx.page(route="/", title="BereaManuel")
def index() -> rx.Component:
    return rx.box(
        navbar(),
        rx.center(
            rx.vstack(
                header(),
                form_nps(),
                max_width=styles.MAX_WIDTH,
                width="100%",
                margin_left=styles.Size.BIG.value,
                margin_right=styles.Size.BIG.value
            ),
        ),
        footer()
    )


app = rx.App(
    style= styles.BASE_STYLE
    )
app.add_page(index)