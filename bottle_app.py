from bottle import get, post, template, request, response, redirect
import os

ON_PYTHONANYWHERE = "PYTHONANYWHERE_DOMAIN" in os.environ.keys()


if ON_PYTHONANYWHERE:
    from bottle import default_app
else:
    from bottle import run, debug

if ON_PYTHONANYWHERE:
    application = default_app()
else:
    debug(True)
    run(host="localhost", port=8080)

@get('/')
def home():
    return template('templates/home')

@get('/about')
def about():
    return template('templates/about')