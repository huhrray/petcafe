#!/bin/bash
docker run -d -p 8000:8000 --name petcafe-local-dynamodb --rm amazon/dynamodb-local