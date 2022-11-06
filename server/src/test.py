from locale import normalize
import pandas as pd
import numpy as np
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import MinMaxScaler, OneHotEncoder, LabelEncoder
from pandas import json_normalize
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.linear_model import LogisticRegression
from sklearn.neighbors import KNeighborsClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split,cross_val_score
from sklearn.model_selection import RandomizedSearchCV, GridSearchCV
from sklearn.metrics import confusion_matrix,classification_report
from sklearn.metrics import precision_score, recall_score, f1_score
from sklearn.metrics import plot_roc_curve, plot_confusion_matrix
import json
import sys
json_data = json.loads(sys.argv[1])
test_json_data=json.loads(sys.argv[2])
test_data=pd.DataFrame(test_json_data)
data= pd.DataFrame(json_data)
data.pop("_id")
data.pop("__v")
data.pop("createdAt")
# Tiền xử lý dữ liệu:
data=data.dropna()
#trích chọn đặc trưng
x=data.drop('Outcome',axis=1)
y=data['Outcome']
log_reg_grid = {
    'C': np.logspace(-4, 4, 20),
    'solver': ['liblinear']
}
gs_log_reg = GridSearchCV(LogisticRegression(),log_reg_grid,cv=5,verbose=True)
gs_log_reg.fit(x, y)
print(gs_log_reg.predict(test_data)[0])
# create function to fit and score model