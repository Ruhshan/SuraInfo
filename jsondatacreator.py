import urllib3
from bs4 import BeautifulSoup

http = urllib3.PoolManager()

url = 'https://ipfs.io/ipfs/QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco/wiki/List_of_surahs_in_the_Quran.html'
response = http.request('GET', url)

soup = BeautifulSoup(response.data,"html.parser")

table = soup.find('table')

def verse_ruku_sep(s):
    if '(' in s:
        s=s.replace('(', '').replace(')','')
        return s.split()
    else:
        return [s.strip(), '0']

print('[\n')
for row in table.findAll('tr')[1:250]:
    col = row.findAll('td')
    sid = col[0].getText().strip()
    title = col[1].getText().strip()
    nverse_nruku = col[4].getText()
    verses, rukus= verse_ruku_sep(nverse_nruku)
    classification=col[5].getText().strip()
    base_str = "{ sid:\"%s\", details:{title:\"%s\", classification: \"%s\", verses: \"%d\", rukus: \"%d\"} }," % \
    (sid, title, classification, int(verses), int(rukus))
    print(base_str)
print('\n]') 