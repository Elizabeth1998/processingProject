from bottle import get, post, template, request, response, redirect

ON_PYTHONANYWHERE = "PYTHONANYWHERE_DOMAIN" in os.environ.keys()


if ON_PYTHONANYWHERE:
    from bottle import default_app
else:
    from bottle import run, debug

@get('/')
def_home():
    return template('home')

@get('/about')
def_about():
    return template('about')