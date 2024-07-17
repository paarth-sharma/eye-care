from flask import Flask, flash, request
import os
from werkzeug.utils import secure_filename
from flask_cors import CORS
import numpy as np
import pandas as pd
import tensorflow as tf 
import os
from flask import make_response
print("Imported Successfully")
from keras._tf_keras.keras.preprocessing.image import load_img

def preprocess_image(img_path):
    img = load_img(img_path, target_size=(224, 224))  # Adjust target_size based on your model requirements
    img_array = img.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    return img_array

 
app = Flask(__name__)
CORS(app)
 
UPLOAD_FOLDER = 'static/uploads/'
 
app.secret_key = "secret key"
app.config['UPLOAD_FOLDER'] = 'UPLOAD_FOLDER'
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024
 
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])
 
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
     
 
@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/', methods=['POST'])
def upload_image():
    print(request.files)
    if 'file' not in request.files:
        flash('No file part')
        return make_response({"message":"Select a file First","predicted":"false"})
    file = request.files['file']    
    print(file)
    if file.filename == '':
        flash('No image selected for uploading')
        return make_response({"message":"Select a file First","predicted":"false"})
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        loaded_model = tf.keras.models.load_model('./Sight-SagePROJECT.tf')
        processed_image = preprocess_image('./UPLOAD_FOLDER/'+filename) 
        predictions = loaded_model.predict(processed_image)
        disease_labels = ['glaucoma', 'cataract', 'normal', 'diabetic_retinopathy']
        df_predict = pd.DataFrame(predictions)
        max_values_per_row = df_predict.idxmax(axis=1)
        m = [disease_labels[i] for i in max_values_per_row]
        os.remove(os.path.join(app.config['UPLOAD_FOLDER'], filename))

        print(m)
        flash('Image successfully uploaded and displayed below')
        # return m
        return make_response({"predicted":"True","data":m})
    else:
        flash('Allowed image types are - png, jpg, jpeg, gif')
        # return "not he allowed type"
        return make_response({"message":"Selected file is not the allowed type","predicted":"false"})


if __name__ == '__main__':
   app.run(host='0.0.0.0', port=8000, debug=True)
