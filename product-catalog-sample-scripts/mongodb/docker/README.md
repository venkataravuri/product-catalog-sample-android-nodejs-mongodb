The **Dockerfile** defines the docker image for MongoDB. The image is based out of CentOS 7 (latest) and MongoDB.

###### Pre-requisites
You must install **Docker Engine** prior to proceeding with following steps, You can get latest copy of Docker Engine at, [Download Docker Engine!](http://docs.docker.com/engine/installation/)

Once Docker Toolbox installed, Open 'Docker Quickstart Terminal' which will automatically creates 'default' VM.

You can also create a VM with Docker Machine using the VirtualBox provider:
```Shell
$ docker-machine create --driver=virtualbox default
# Lists docker machines
$ docker-machine ls
```
Start 'default' VM in virtual box,
```Shell
$ docker-machine start default
```
Once 'default' VM is started, follow below instructions to create a new docker image.
###### Build a Docker image with MongoDB pre-installed
```Shell
$ docker build -t local/centos-mongodb .
```
Above the Docker images is named as *'local/centos-mongodb'*.
###### Run the Docker image, Usage: docker run --name <name for container> -d <user-name>/<repository> --noprealloc --smallfiles
```Shell
$ docker run -p 27017:27017 --name mongo_instance_001 -d local/centos-mongodb --smallfiles
```
The Docker container is names as *'mongo_insance_001'*. Once Docker container bootup, check out the logs with following command, Usage: docker logs <name for container>.
```Shell
$ docker logs mongo_instance_001
```
Log into the default VM in virtual box,
```Shell
$ docker-machine ssh default
```
Once logged onto VM, execute following command to start Docker container,
```Shell
# Shows the running containers in the VM,
$ docker ps
# Start the container,
$ docker start mongo_instance_001
````
To enter a running container, attach a new shell process to a running container called mongo_instance_001,
```Shell
$ docker exec -it mongo_instance_001 bash

$ winpty docker exec -it mongo_instance_001 bash

```
Logon to mongo prompt, Usage: mongo --port <port you get from `docker ps`>
```Shell
$ mongo --port 27017
```

# Stop all containers
docker stop $(docker ps -a -q)
# Delete all containers
docker rm $(docker ps -a -q)
# Delete all images
docker rmi $(docker images -q)
