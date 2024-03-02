import reflex as rx

def perfil_image(size:int)-> rx.Component:
    return rx.image(src="/images/me2.jpg", 
                    size=str(size),
                    align="center") 