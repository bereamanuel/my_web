import re
import reflex as rx
import datetime as dt
from enum import Enum

from pymongo import MongoClient
from bson import ObjectId
from fastapi import HTTPException, status

from link_bio.api.model.response import Response
from link_bio.api.schema.response import response_schema

import link_bio.styles.styles as sytles
from link_bio.styles.color import Color

import link_bio.variables.variables as variables

db_client = MongoClient(variables.MONGO_URI).test

class FormState(rx.State):
    form_data: dict = {}

    def handle_submit(self, form_data: Response):
        """Handle the form submit."""
        try:
            user = response_schema(db_client.responses.find_one({"email":form_data["email"]}))["email"]
            return print(f"El usuario {user} ya existe.")
        except:
            #print(Alert_form.alert)
            if re.match('^[(a-z0-9\_\-\.)]+@[(a-z0-9\_\-\.)]+\.[(a-z)]{2,4}$',form_data["email"].lower()):
                form_data["year"] = dt.datetime.now().year
                id = db_client.responses.insert_one(form_data).inserted_id
                new_response = response_schema(db_client.responses.find_one({"_id":ObjectId(id)}))
                return print(new_response)
            else:
                return 

""" class Alert_form(rx.State):
    alert:str = "Introduzca su email"

    def set_alert(self,value):
        print(self.alert)
        try:
            user = response_schema(db_client.responses.find_one({"email":value}))["email"]
            self.alert = f"El usuario {user} ya existe."
        except:
            if re.match('^[(a-z0-9\_\-\.)]+@[(a-z0-9\_\-\.)]+\.[(a-z)]{2,4}$',value.lower()):
                self.alert ="La respuesta ha sido validada."
            else:
                self.alert ="El correo no es válido." """


def nps():
    return rx.vstack(
            rx.heading("¿Con que probabilidad del 0 al 10 recomendarías nuestros servicios?"),
            rx.form(
                rx.vstack(
                    rx.radio(
                        ["0","1", "2", "3", "4", "5","6","7","8","9","10"],
                        name="response",
                        direction="row",
                        spacing="5",
                        size="3",
                        required=True,
                        color_scheme = "gray",
                        high_contrast = True,
                        width="100%"
                    ),
                    rx.input(
                        placeholder="Email",
                        name="email",
                        type = "email",
                        color_scheme = "gray",
                        high_contrast = True,
                        server_invalid = True,
                        required=True,
                        width="100%"
                    ),
                    rx.button(
                            "Submit", 
                            type="submit",
                            color_scheme="gray",
                            high_contrast = True)
                ),
                on_submit=FormState.handle_submit,
                reset_on_submit=True,
                width = "100%"
            ),
            width = "100%",
            border = "1px solid",
            border_radius = sytles.Size.BIG.value,
            padding = sytles.Size.BIG.value
        )
        

def search_response(field:str, key):
    try:
        response = response_schema(db_client.responses.find_one({field:key}))
        return response["email"]
    except:
        return print(HTTPException(status.HTTP_404_NOT_FOUND, detail="No user found"))