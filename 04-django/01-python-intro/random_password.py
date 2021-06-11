import string
import random 


char = string.ascii_letters + string.digits


password =  "".join(random.choice(char) for i in range(random.randint(6, 16)))
print(password)