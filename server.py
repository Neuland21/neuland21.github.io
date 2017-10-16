from flask import Flask, jsonify, render_template, redirect, request, flash, session

app = Flask(__name__)

app.secret_key = "SOMETHINGHERE"


@app.route('/')
def index():
    """ Coming soon landing page. """
    print ("entered")
    return render_template('base.html')


if __name__ == "__main__":
    app.run(port=5000, host='0.0.0.0', threaded=True)