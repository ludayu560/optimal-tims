import json

with open('src/classes.json', 'r') as file:
    classes = json.load(file)

# rooms = sorted(set([clas["room"] for clas in classes]))
# start_times = sorted(set([clas["start"] for clas in classes]))

# model 1: DC
# buildings = ["M3", "GSC", "MC", "C2", "DC", "ESC", "EIT", "E3"]

dc = ["DC"]
model1 = [clas for clas in classes if clas["building"] in dc]
monday = [mon for mon in model1 if "M" in mon["days"]]

minutes = []
for i in range(510, 1260):
    inc = 0
    for clas in monday:
        if i >= clas["start"] and i <= clas["end"]:
            inc = inc + 1
    minutes.append(inc)

print(monday)
print(minutes)
