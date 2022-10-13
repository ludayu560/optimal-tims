import json, re, time
from bs4 import BeautifulSoup

# The schedule tables provide no indication of AM/PM, however, the earliest a class
#  can begin is 8:30 AM, and the latest is 8:00 PM. So if the time is between 8:30
#  and 11:59, it's AM, otherwise it's PM, and we increase the hour count accordingly.
# time_range_in_mins converts a string of the form "HH:MM-HH:MM" and returns a pair of
#  integers, the start and end time, as minute counts beginning at 12:00 AM.
def time_range_in_mins(time_range):
    start, end = time.strptime(time_range[0:5],'%H:%M'), time.strptime(time_range[6:11],'%H:%M')
    start_hours, end_hours = start.tm_hour, end.tm_hour
    if start.tm_hour < 8 or (start.tm_hour == 8 and start.tm_min < 30):
        start_hours, end_hours = start_hours + 12, end_hours + 12
    elif end.tm_hour < start.tm_hour:
        end_hours = end_hours + 12
    return (start_hours * 60 + start.tm_min, end_hours * 60 + end.tm_min)


# Get all the rows in the schedule tables that actually contain content:
# <main> 
#  <p>
#   <TABLE BORDER=2> <-- outer_table
#    ...
#    <TR>
#     <TD>
#       <TABLE> <-- inner_table
#        <TR> <- row
#          <TD> <- col
# clas := row if the first_col exists and is numeric (i.e., a course code)
with open('scripts/subjects.txt') as file:
        subjects = file.read().split('\n')

classes = []
for subject in subjects:
    with open('schedules/{0}.html'.format(subject), 'r') as file:
        soup = BeautifulSoup(file.read(), 'html.parser')
        outer_table = soup.find('main').find_all('p')[1].find('table')
        if outer_table is not None:
            for inner_table in outer_table.find_all('table'):
                for row in inner_table.find_all('tr'):
                    first_td = row.find('td')
                    if first_td is not None and first_td.text.strip().isnumeric():
                        cols = row.find_all('td')
                        clas = [col.text.strip() for col in cols]
                        classes.append(clas)


# Build a comfy JSON:
#  class = {building, room, start [time], end [time], [week]days, [#] attended}
classes_json = []
weekdays_regex = re.compile("|".join(['Th', 'M', 'T', 'W', 'F']))
for clas in classes:
    # Conditions that a class is in-person, at the Waterloo campus
    if clas[2] == 'UW    U' and clas[11] != 'Online' and clas[11] != '':
        building, room = clas[11].split(' ')
        start_time, end_time = time_range_in_mins(clas[10][0:11])
        days = re.findall(weekdays_regex, clas[10][11:])
        registered = int(clas[7])
        classes_json.append(
            {"building": building,
            "room": room,
            "start": start_time,
            "end": end_time,
            "days": days,
            "attended": registered})

with open('src/classes.json', 'w') as file:
    file.write(json.dumps(classes_json))
