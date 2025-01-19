# OpenTripPlanner (OTP) Backend

LTA uses an open source route planning backend known as OpenTripPlanner, which is written in Java

## Required Data Sources

- **GTFS feed of the bus transit system**: The [General Transit Feed Specification](https://gtfs.org) (GTFS) is a standard specification for the representation of transit systems. In other words, it statically defines the routes, trips, stop times, among other things, about the transit system. It is used by OpenTripPlanner to determine the way in which the transit system can be used when planning a route from point A to point B
- **OSM data on Leicester**: [OpenStreetMap](https://www.openstreetmap.org/#map=18/42.246045/-71.906662) (OSM) is a collaborative, global map database that is used by OTP to built a road network for other common forms of transportation, such as walking, cycling, and driving. A web tool called [Protomaps](https://slice.openstreetmap.us) was used to grab a subset of this global data for Leicester. OSM data is available in XML or the binary Protocol Buffers (PBF). OTP only recognizes the PBF format because it is smaller and more efficient

## Running OTP Backend Locally

The OTP server can be run as a JAR file that contains all of the necessary dependencies or from within a Docker container for improved portability

### Running the JAR file

```
$ ./dev.sh jar <path-to-jar-file>
```

### Running from within a Docker container

```
$ ./dev.sh docker
```
