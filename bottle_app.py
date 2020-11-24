from bottle import get, post, template, request, response, redirect
import os

ON_PYTHONANYWHERE = "PYTHONANYWHERE_DOMAIN" in os.environ.keys()


if ON_PYTHONANYWHERE:
    from bottle import default_app
else:
    from bottle import run, debug

@get('/')
def home():
    return template('templates/home')

@get('/about')
def about():
    return template('templates/about')