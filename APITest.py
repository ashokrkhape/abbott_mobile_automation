import requests

def getPercentGrowth(current, prev):
    return (current - prev)/prev *100


url = "https://datausa.io/api/data?drilldowns=Nation&measures=Population"

response = requests.get(url)


if response.status_code == 200:
  
    data = response.json()
 
    source = data['source'][0]['annotations']['source_name']
    years = len(data['data'])
    start_year = data['data'][-1]['Year']
    end_year = data['data'][0]['Year']
    
    growth_percents = {}
    for i in range(years - 2, 0, -1):
        curent_year = data['data'][i]
        prev_year = data['data'][i + 1]
        percent_growth = getPercentGrowth(curent_year['Population'], prev_year['Population'])
        growth_percents.update({curent_year['Year'] : percent_growth})
    

    peak_growth = round(max(growth_percents.values()), 2)
    peak_growth_year = max(growth_percents, key=growth_percents.get)

    lowest_growth = round(min(growth_percents.values()), 2)
    lowest_growth_year = min(growth_percents, key=growth_percents.get)
    

    print(
        f"According to {source}, in {years} years from {start_year} to {end_year}, "
        f"peak population growth was {peak_growth}% in {peak_growth_year} and "
        f"the lowest population increase was {lowest_growth}% in {lowest_growth_year}."
    )
    
else:
    print(f"Received status code: {response.status_code}")

