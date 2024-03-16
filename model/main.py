from flask import Flask, jsonify, request , json
from flask_cors import CORS
import pyttsx3
from deep_translator import GoogleTranslator

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return 'Hello World'

@app.route('/translate', methods=['POST'])
def translate():
    text = request.json
    text_data = text.get('textValue')
    language = text.get('selectedValue')
    print(text)
    result = filecontentread(text_data , language)
    return jsonify({"Message":result})

# def speak(text):
#     engine = pyttsx3.init()
#     engine.say(text)
#     engine.runAndWait()

def translate(text , langauge):
    translator = GoogleTranslator(source='auto', target=langauge)
    return translator.translate(text)

def filecontentread(file_content , language):
        translated_text = translate(file_content , language)
        # speak(translated_text)
        return translated_text

if __name__ == '__main__':
    app.run(debug=True)
