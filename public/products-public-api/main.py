from typing import Optional
from api import app
import requests
from configuration import config

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
async def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}

@app.get("/fetch")
async def fetch_item():
    response = requests.get(config.apis.products_api)
    return response.json()