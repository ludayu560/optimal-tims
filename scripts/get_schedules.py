import requests, time
from bs4 import BeautifulSoup


# List of subjects 
uw_classes_url = 'https://classes.uwaterloo.ca/under.html'

uw_classes_text = requests.get(uw_classes_url).text
soup = BeautifulSoup(uw_classes_text, 'html.parser')

# Take from a selector query with id="ssubject"
subjects_text = soup.find(id='ssubject').text

with open('scripts/subjects.txt', 'w') as file:
        file.write(subjects_text.strip())

subjects = list(filter(lambda x: x != '', subjects_text.split('\n')))


# Class schedules
for subject in subjects:
    schedule_url = 'https://classes.uwaterloo.ca/cgi-bin/cgiwrap/infocour/salook.pl?sess=1229&level=under&subject={0}&cournum='.format(subject)
    with open('schedules/{0}.html'.format(subject), 'w') as file:
        file.write(requests.get(schedule_url).text)
    time.sleep(1)
