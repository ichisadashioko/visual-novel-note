# encoding=utf-8
import os

import flask
from flask import Flask, jsonify


app = Flask(
    import_name=__name__,
    static_folder='web/static',
    static_url_path='',
)


@app.route('/api/words')
def get_words():
    return jsonify({'words': []})


@app.route('/')
def root():
    return app.send_static_file('index.html')


if __name__ == '__main__':
    app.run(debug=True)
