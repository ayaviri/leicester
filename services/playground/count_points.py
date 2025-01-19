import pandas as pd
import folium

# Filepath to the CSV file
csv_file = "data/count_points.csv"

# Step 1: Load the CSV file
data = pd.read_csv(csv_file)

# Step 2: Initialize a map centered on Leicester
map_center = [52.6074, -1.1168]  # Approximate center of Leicester
leicester_map = folium.Map(location=map_center, zoom_start=12)

# Step 3: Define the town boundary as a list of coordinates (latitude, longitude)
town_boundary = [
    [42.281425, -71.960533],
    [42.189239, -71.939358],
    [42.192428, -71.895136],
    [42.225979, -71.866017],
    [42.226693, -71.856637],
    [42.284581, -71.885642],
    [42.281425, -71.960533],
]

# Step 4: Add the town boundary to the map
folium.Polygon(
    locations=town_boundary,
    color="blue",  # Outline color
    weight=2,  # Line weight
    fill=True,  # Enable fill
    fill_color="lightblue",  # Fill color
    fill_opacity=0.4,  # Fill transparency
).add_to(leicester_map)

# Step 5: Plot each count point on the map
for _, row in data.iterrows():
    latitude = row["latitude"]
    longitude = row["longitude"]
    road_name = row["road_name"]
    road_type = row["road_type"]

    # Create a marker for each point
    popup_text = f"Road: {road_name}<br>Type: {road_type}"
    folium.Marker(
        location=[latitude, longitude],
        popup=popup_text,
        icon=folium.Icon(color="blue", icon="info-sign"),
    ).add_to(leicester_map)

# Step 6: Save the map to an HTML file and open it in the browser
output_map = "output/count_points_map.html"
leicester_map.save(output_map)
print(f"Map saved to {output_map}. Open this file in a browser to view the map.")
