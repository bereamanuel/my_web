import reflex as rx
from fastapi import HTTPException, status
from link_bio.api.model.response import Response
from link_bio.api.schema.response import response_schema,responses_schema
from pymongo import MongoClient
from bson import ObjectId
import datetime as dt

db_client = MongoClient("mongodb+srv://admin:admin@cluster0.wscqaff.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").test

class FormState(rx.State):
    form_data: dict = {}

    def handle_submit(self, form_data: Response):
        """Handle the form submit."""
        try:
            user = response_schema(db_client.responses.find_one({"email":form_data["email"]}))["email"]
            return print("El usuario "+user +" ya existe.")
        except:
            form_data["year"] = dt.datetime.now().year
            id = db_client.responses.insert_one(form_data).inserted_id
            new_response = response_schema(db_client.responses.find_one({"_id":ObjectId(id)}))
            return  print(new_response)


class slider_value(rx.State):
    value:int
    def set_end(self, value:int):
        self.value = value

def nps():
    return rx.vstack(
        rx.text("How likely are you to recommend us on a scale from 0 to 10?"),
        rx.form(
            rx.vstack(
                rx.input(
                    placeholder="Email",
                    name="email",
                    server_invalid = True
                ),
                rx.vstack(
                    rx.heading(slider_value.value),
                    rx.slider(
                    name="response",
                    default_value=5,
                    min=0,
                    max=10,
                    on_value_commit=slider_value.set_end,
                    )
                ),
                rx.button("Submit", type="submit"),
            ),
            on_submit=FormState.handle_submit,
            reset_on_submit=True,
        )
    )

def search_response(field:str, key):
    try:
        response = response_schema(db_client.responses.find_one({field:key}))
        return response["email"]
    except:
        return print(HTTPException(status.HTTP_404_NOT_FOUND, detail="No user found"))