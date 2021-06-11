users = [
    {
        "first_name": "Brain",
        "last_name": "Mohr",
        "age": 54
    },
    {
        "first_name": "Bella",
        "last_name": "VonRueden",
        "age": 17
    },
    {
        "first_name": "Franz",
        "last_name": "Raynor",
        "age": 28
    },
    {
        "first_name": "Celestino",
        "last_name": "Bailey",
        "age": 61
    }
]

def groupByAge(**message):
    return(message(users))

for person in users:

    if person["age"]<29:
        print("Children", person['first_name'], person['last_name'])
    else:
        print("Adults", person['first_name'], person['last_name'])


