import reflex as rx

def navbar() -> rx.Component:
    return rx.hstack(
            rx.vstack(
                rx.text(
                    "Manuel Berea",
                    size="6",
                    weight="medium",
                    align="center",
                    height ="40px"
                ),
            position="sticky",
            padding="16px",
            z_index="999"
            )
        )