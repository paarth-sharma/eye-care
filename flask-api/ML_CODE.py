import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import tensorflow as tf 
from tensorflow import keras
import keras
from keras._tf_keras.keras.applications.resnet50 import ResNet50
from pathlib import Path
from tqdm import tqdm
import matplotlib.pyplot as plt


print("Imported Successfully")

# import each path of the image classes
glaucoma = Path(r'./Dataset/glaucoma')
cataract = Path(r'./Dataset/cataract')
normal = Path(r'./Dataset/normal')
diabetic_retinopathy = Path(r'./Dataset/diabetic_retinopathy')

# create a dataframe with the file path and the labels
disease_type = [glaucoma, cataract,normal,diabetic_retinopathy]
df = pd.DataFrame()
from tqdm import tqdm
for types in disease_type:
    for imagepath in tqdm(list(types.iterdir()), desc= str(types)):
        df = pd.concat([df, pd.DataFrame({'image': [str(imagepath)],'disease_type': [disease_type.index(types)]})], ignore_index=True)

df

df['disease_type'] = df['disease_type'].map({0:'glaucoma',1:'cataract',2:'normal',3:'diabetic_retinopathy'})
# check the lebel count to verify it has been mapped
df.disease_type.value_counts()
# randomising the dataset
df1 = df.sample(frac=1).reset_index(drop=True)

#import necessary libraries for the model
from keras._tf_keras.keras.preprocessing.image import ImageDataGenerator
from keras._tf_keras.keras.applications.resnet50 import preprocess_input
from keras import layers

# augumentation of images
datagen = ImageDataGenerator(preprocessing_function=preprocess_input,validation_split=0.2)
# create the train data
train_data = datagen.flow_from_dataframe(dataframe=df1,
                                          x_col ='image',
                                          y_col = 'disease_type',
                                          target_size=(224,224),
                                          class_mode = 'categorical',
                                          batch_size = 32,
                                          shuffle = True,
                                          subset = 'training')

# create the validation data
valid_data = datagen.flow_from_dataframe(dataframe=df1,
                                          x_col ='image',
                                          y_col = 'disease_type',
                                          target_size=(224,224),
                                          class_mode = 'categorical',
                                          batch_size = 32,
                                          shuffle = False,
                                          subset = 'validation')

labels=[key for key in train_data.class_indices]
num_classes = len(disease_type)

model = keras.Sequential([ 
    layers.Rescaling(1./255, input_shape=(224,224, 3)), 
    layers.Conv2D(16, 3, padding='same', activation='relu'), 
    layers.MaxPooling2D(), 
    layers.Conv2D(32, 3, padding='same', activation='relu'), 
    layers.MaxPooling2D(), 
    layers.Conv2D(64, 3, padding='same', activation='relu'), 
    layers.MaxPooling2D(), 
    layers.Flatten(), 
    layers.Dense(128, activation='relu'), 
    layers.Dense(num_classes,activation='softmax') 
]) 
model.compile(optimizer='adam', 
              loss=tf.keras.losses.categorical_crossentropy, 
              metrics=['accuracy']) 
model.summary()
# fitting the model
his = model.fit( 
  train_data,
    validation_data=valid_data, 
  epochs=15 
)
# evaluate the model
y_test = valid_data.classes
y_pred = model.predict(valid_data)
y_pred = np.argmax(y_pred,axis=1)

model.save("Sight-SageProject.tf")
loaded_model = tf.keras.models.load_model('Sight-SageProject.tf')

from keras._tf_keras.keras.preprocessing.image import load_img
def preprocess_image(img_path):
    img = load_img(img_path, target_size=(224, 224))  # Adjust target_size based on your model requirements
    img_array = img.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    return img_array

# Provide the path to your image
image_path = r'_21_4533748.jpg'  # Replace with the actual path to your image

# Preprocess the image
processed_image = preprocess_image(image_path)
predictions = loaded_model.predict(processed_image)
disease_labels = ['glaucoma', 'cataract', 'normal', 'diabetic_retinopathy']
df_predict = pd.DataFrame(predictions)
max_values_per_row = df_predict.idxmax(axis=1)
m = [disease_labels[i] for i in max_values_per_row]
print(m)