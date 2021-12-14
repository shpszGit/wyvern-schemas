#!/bin/sh

set -e

yarn run mocha test/*.ts --require ts-node/register/transpile-only --exit
