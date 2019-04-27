# Kafka

Apache Kafka is a "distributed streaming platform".

For introduciton, see: https://kafka.apache.org/intro

Essentially, it is a mix of a distributed file system (for processing _historical_ data) and pub-sub a messaging system (that allows processing _future_ messages).

It puts "what record to read" in the _consumer's_ hands (they have an index pointing at where in the stream they're reading) so you don't have the problem of pushing messages that once read are gone.

## Clients

Ruby Kafka - https://github.com/zendesk/ruby-kafka
