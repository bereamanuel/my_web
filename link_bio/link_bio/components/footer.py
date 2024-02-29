import reflex as rx
import datetime 

def footer() -> rx.Component:
    return rx.hstack(
                rx.link(f"© 2021-{datetime.date.today().year} BEREAMANUEL BY MANUEL BEREA.", href="https://google.com", is_external=True, size="2"),
                rx.text("Data Analyst.", size="2"),
                rx.image(src="/favicon.ico", size="2")
            )