#/!bin/sh

set -e

exec node $(dirname "$0")/app/app.js "$@"