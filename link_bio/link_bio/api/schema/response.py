def response_schema(response) -> dict:
    return {"id": str(response["_id"]) ,
            "email": response["email"] ,
            "response": response["response"],
             "year" : response["year"] }


def responses_schema(responses) -> list:
    return list(map(lambda response: response_schema(response), responses))