#!/usr/bin/env python3

import json
  
  
# JSON string
a = '{"name": "Bob", "languages": "English"}'
  
# deserializes into dict 
# and returns dict.
y = json.loads(a)
  
print("JSON string = ", y)
print()
  
  
  
# JSON file
f = open ('weather.json', "r")
  
# Reading from file
data = json.loads(f.read())
  
# Iterating through the json
# list
# for i in data['emp_details']:
    # print(i)
# for i in data:
#     print(i)

# parsed = json.loads(data)
for key, value in data.items():
    print(key, ":", value)
  
# Closing file
f.close()
