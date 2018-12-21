# Dockerizing MongoDB: Dockerfile for building MongoDB images
# Based on centos:latest, installs MongoDB following the instructions from:
# http://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/
#
FROM centos:latest
MAINTAINER "Venkata Ravuri" <venkat@nikhu.com>

# Update packages
# RUN yum -y update; yum clean all;

# Install Git to checkout code from github.
RUN yum install -y git

# Configure the package management system (yum). Creates a /etc/yum.repos.d/mongodb-org-3.0.repo file so that we can install MongoDB directly, using yum.
RUN printf "[mongodb-org-3.0]\nname=MongoDB Repository\nbaseurl=https://repo.mongodb.org/yum/redhat/7Server/mongodb-org/3.0/x86_64/\ngpgcheck=0\nenabled=1" | tee /etc/yum.repos.d/mongodb-org-3.0.repo

# Install MongoDB
RUN yum install -y mongodb-org

# Create the MongoDB data directory
RUN mkdir -p /data/db

# Expose port 27017 from the container to the host
EXPOSE 27017

# Set usr/bin/mongod as the dockerized entry-point application
ENTRYPOINT ["/usr/bin/mongod"]