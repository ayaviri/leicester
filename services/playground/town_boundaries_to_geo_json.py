town_boundary = [
    [42.281425, -71.960533],
    [42.189239, -71.939358],
    [42.192428, -71.895136],
    [42.225979, -71.866017],
    [42.226693, -71.856637],
    [42.284581, -71.885642],
    [42.281425, -71.960533],
]

import json


def to_geojson(coordinates):
    # Create a GeoJSON structure
    geojson = {"type": "FeatureCollection", "features": []}

    for coord in coordinates:
        feature = {
            "type": "Feature",
            "geometry": {"type": "Point", "coordinates": coord},
            "properties": {},
        }
        geojson["features"].append(feature)

    return json.dumps(geojson, indent=2)


# Convert to GeoJSON format
geojson_output = to_geojson(town_boundary)
print(geojson_output)
