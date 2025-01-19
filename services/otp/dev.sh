# java -Xmx3G -jar otp-2.6.0-shaded.jar --build --serve .

#!/usr/bin/env bash

set -e
usage() {
    echo "usage: $0 <jar|docker> [path_to_jar_file_if_jar]"
    exit 1
}

if [ $# -lt 1 ]; then
    usage
fi

MODE=$1

if [ "$MODE" == "jar" ]; then
    if [ $# -lt 2 ]; then
        echo "error: path to shaded jar file not present"
        exit 1
    fi

    JAR_PATH=$2

    if [ ! -f "$JAR_PATH" ]; then
        echo "error: shaded jar file not found at $JAR_PATH"
        exit 1
    fi

    echo "starting otp server using jar file at $JAR_PATH"
    java -Xmx3G -jar "$JAR_PATH" --build --serve ./data

elif [ "$MODE" == "docker" ]; then
    echo "starting otp server within a docker container"
    # Graph build phase, persist to disk
    docker run --rm -v "$(pwd)/data:/var/opentripplanner" docker.io/opentripplanner/opentripplanner:latest --build --save
    # Run server with constructed graph
    docker run -it --rm -p 8080:8080 -v "$(pwd)/data:/var/opentripplanner" docker.io/opentripplanner/opentripplanner:latest --load --serve
else
    echo "error: invalid mode '$MODE'. use either 'jar' or 'docker'"
    exit 1
fi
