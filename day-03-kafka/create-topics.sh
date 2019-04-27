#!/bin/bash

# Create 2 topics named test-topic-1 and test-topic-2,
# each with a single partition and replica on localhost
kafka-topics --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1 --topic test-topic-1

# See topics that we've created
kafka-topics --list --bootstrap-server localhost:9092